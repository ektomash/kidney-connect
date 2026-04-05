import { useState, useEffect, useCallback } from "react";
import { useParams, useSearchParams, Link } from "react-router-dom";
import { kidsLessons } from "../data/kidsLessons";
import Mascot from "../components/Mascot";
import SpeechBubble from "../components/SpeechBubble";
import Quiz from "../components/Quiz";
import LessonProgress from "../components/LessonProgress";
import "./KidsLesson.css";

function KidsLesson() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const ageGroup = searchParams.get("age") || "younger";

  return (
    <KidsLessonContent key={`${id}-${ageGroup}`} id={id} ageGroup={ageGroup} />
  );
}

function KidsLessonContent({ id, ageGroup }) {
  const lesson = kidsLessons.find((l) => l.id === Number(id));
  const [currentStep, setCurrentStep] = useState(0);
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const content = lesson?.ageContent[ageGroup];
  const steps = content?.steps || [];
  const quiz = content?.quiz || [];
  const step = steps[currentStep];

  const mascotPose = isAudioPlaying ? "talking" : (step?.mascotPose || "idle");

  useEffect(() => {
    return () => {
      window.speechSynthesis?.cancel();
    };
  }, []);

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
      return;
    }
    if (currentStep > 0) {
      setCurrentStep((s) => s - 1);
      setImageLoaded(false);
    }
  };

  const handleNext = () => {
    cancelSpeech();
    if (currentStep < steps.length - 1) {
      setCurrentStep((s) => s + 1);
      setImageLoaded(false);
    }
  };

  const handleStartQuiz = () => {
    cancelSpeech();
    setIsQuizActive(true);
  };

  if (!lesson || !content) {
    return (
      <div className="kids-lesson-not-found">
        <Mascot pose="thinking" size={120} />
        <h2>Lesson not found</h2>
        <Link to="/advice/kids">Back to Kids Zone</Link>
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

      {!isQuizActive && step && (
        <div className="kids-lesson-content" key={currentStep}>
          <div className="kids-lesson-image-wrapper">
            <img
              src={step.image}
              alt={step.imageAlt}
              className={`kids-lesson-image ${imageLoaded ? "loaded" : ""}`}
              onLoad={() => setImageLoaded(true)}
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
              to={`/advice/kids/${prevLesson.id}?age=${ageGroup}`}
              className="nav-lesson-link prev"
            >
              &larr; {prevLesson.title}
            </Link>
          )}
          {nextLesson && (
            <Link
              to={`/advice/kids/${nextLesson.id}?age=${ageGroup}`}
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
