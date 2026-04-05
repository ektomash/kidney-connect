import { useState, useEffect, useCallback } from "react";
import { useParams, useSearchParams, Link } from "react-router-dom";
import { kidsLessons } from "../data/kidsLessons";
import fallbackImage from "../assets/hero.png";
import Mascot from "../components/Mascot";
import SpeechBubble from "../components/SpeechBubble";
import Quiz from "../components/Quiz";
import LessonProgress from "../components/LessonProgress";
import "./KidsLesson.css";

function KidsLesson() {
  const { lessonKey } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const ageGroup = searchParams.get("age") || "younger";
  const urlView = searchParams.get("view") === "quiz" ? "quiz" : "lesson";
  const rawPage = Number.parseInt(
    searchParams.get("page") || searchParams.get("step") || "1",
    10,
  );
  const urlStep = Number.isNaN(rawPage) ? 0 : Math.max(0, rawPage - 1);

  return (
    <KidsLessonContent
      key={`${lessonKey}-${ageGroup}`}
      lessonKey={lessonKey}
      ageGroup={ageGroup}
      urlView={urlView}
      urlStep={urlStep}
      searchParams={searchParams}
      setSearchParams={setSearchParams}
    />
  );
}

function KidsLessonContent({
  lessonKey,
  ageGroup,
  urlView,
  urlStep,
  searchParams,
  setSearchParams,
}) {
  const lesson = kidsLessons.find(
    (l) => String(l.id) === String(lessonKey) || l.slug === lessonKey,
  );
  const [currentStep, setCurrentStep] = useState(urlStep);
  const [isQuizActive, setIsQuizActive] = useState(urlView === "quiz");
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const content = lesson?.ageContent[ageGroup];
  const steps = content?.steps || [];
  const quiz = content?.quiz || [];
  const step = steps[currentStep];
  const maxStepIndex = Math.max(steps.length - 1, 0);

  const mascotPose = isAudioPlaying ? "talking" : (step?.mascotPose || "idle");

  const updateLessonUrl = useCallback((nextStep, nextView = "lesson") => {
    const params = new URLSearchParams(searchParams);
    params.set("age", ageGroup);
    params.set("page", String(nextStep + 1));
    params.set("view", nextView);
    setSearchParams(params);
  }, [ageGroup, searchParams, setSearchParams]);

  useEffect(() => {
    return () => {
      window.speechSynthesis?.cancel();
    };
  }, []);

  useEffect(() => {
    const clampedUrlStep = Math.min(Math.max(urlStep, 0), maxStepIndex);
    const shouldShowQuiz = urlView === "quiz" && quiz.length > 0;

    if (currentStep !== clampedUrlStep) {
      setCurrentStep(clampedUrlStep);
      setImageLoaded(false);
    }

    if (isQuizActive !== shouldShowQuiz) {
      setIsQuizActive(shouldShowQuiz);
    }
  }, [urlStep, urlView, maxStepIndex, quiz.length, currentStep, isQuizActive]);

  const cancelSpeech = useCallback(() => {
    window.speechSynthesis?.cancel();
    setIsAudioPlaying(false);
  }, []);

  const handleAudioStart = useCallback(() => setIsAudioPlaying(true), []);
  const handleAudioEnd = useCallback(() => setIsAudioPlaying(false), []);

  const handleBack = () => {
    cancelSpeech();
    if (isQuizActive) {
      setIsQuizActive(false);
      updateLessonUrl(currentStep, "lesson");
      return;
    }
    if (currentStep > 0) {
      const nextStep = currentStep - 1;
      setCurrentStep(nextStep);
      setImageLoaded(false);
      updateLessonUrl(nextStep, "lesson");
    }
  };

  const handleNext = () => {
    cancelSpeech();
    if (currentStep < steps.length - 1) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      setImageLoaded(false);
      updateLessonUrl(nextStep, "lesson");
    }
  };

  const handleStartQuiz = () => {
    cancelSpeech();
    setIsQuizActive(true);
    updateLessonUrl(currentStep, "quiz");
  };

  if (!lesson || !content) {
    return (
      <div className="kids-lesson-not-found">
        <Mascot pose="thinking" size={120} />
        <h2>Lesson not found</h2>
        <Link to="/advice/kids?age=younger">Back to Kids Zone</Link>
      </div>
    );
  }

  const lessonIndex = kidsLessons.findIndex((l) => l.id === lesson.id);
  const nextLesson = kidsLessons[lessonIndex + 1];
  const prevLesson = kidsLessons[lessonIndex - 1];

  return (
    <div className="kids-lesson">
      <div className="kids-lesson-header">
        <Link to={`/advice/kids?age=${ageGroup}`} className="kids-lesson-back">
          &larr; All Lessons
        </Link>
        <div className="kids-lesson-title-row">
          <span className="kids-lesson-icon">{lesson.icon}</span>
          <h1>{lesson.title}</h1>
        </div>
        <p className="kids-lesson-subtitle">{lesson.subtitle}</p>
      </div>

      <div className="kids-lesson-stage">
        {!isQuizActive && step && (
          <div className="kids-lesson-content" key={currentStep}>
            <div className="kids-lesson-image-wrapper">
              <img
                src={step.image}
                alt={step.imageAlt}
                className={`kids-lesson-image ${imageLoaded ? "loaded" : ""}`}
                onLoad={() => setImageLoaded(true)}
                onError={(event) => {
                  event.currentTarget.src = fallbackImage;
                }}
              />
              {!imageLoaded && <div className="kids-lesson-image-placeholder" />}
            </div>

            <div className="kids-lesson-mascot-row">
              <Mascot pose={mascotPose} size={100} />
              <SpeechBubble
                text={step.mascotText}
                onAudioStart={handleAudioStart}
                onAudioEnd={handleAudioEnd}
              />
            </div>
          </div>
        )}

        {isQuizActive && (
          <div className="kids-lesson-quiz">
            <h2 className="kids-lesson-quiz-title">
              Test Your Knowledge! &#9989;
            </h2>
            <Quiz
              questions={quiz}
              onComplete={() => {}}
            />
          </div>
        )}
      </div>

      <LessonProgress
        currentStep={currentStep}
        totalSteps={steps.length}
        hasQuiz={quiz.length > 0}
        isQuizActive={isQuizActive}
        onBack={handleBack}
        onNext={handleNext}
        onStartQuiz={handleStartQuiz}
        canGoBack={currentStep > 0 || isQuizActive}
        canGoNext={currentStep < steps.length - 1}
      />

      {isQuizActive && (
        <div className="kids-lesson-nav-lessons">
          {prevLesson && (
            <Link
              to={`/advice/kids/${prevLesson.slug || prevLesson.id}?age=${ageGroup}&page=1&view=lesson`}
              className="nav-lesson-link prev"
            >
              &larr; {prevLesson.title}
            </Link>
          )}
          {nextLesson && (
            <Link
              to={`/advice/kids/${nextLesson.slug || nextLesson.id}?age=${ageGroup}&page=1&view=lesson`}
              className="nav-lesson-link next"
            >
              {nextLesson.title} &rarr;
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

export default KidsLesson;
