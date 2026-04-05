import { useState, useEffect, useCallback } from "react";
import { useParams, useSearchParams, Link } from "react-router-dom";
import { kidsLessons } from "../data/kidsLessons";
import fallbackImage from "../assets/hero.png";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Mascot from "../components/Mascot";
import SpeechBubble from "../components/SpeechBubble";
import Quiz from "../components/Quiz";
import LessonProgress from "../components/LessonProgress";

function KidsLesson() {
  const { lessonKey } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const ageGroup = (searchParams.get("age") || "younger") as "younger" | "older";
  const urlView = searchParams.get("view") === "quiz" ? "quiz" : "lesson";
  const rawPage = Number.parseInt(
    searchParams.get("page") || searchParams.get("step") || "1",
    10
  );
  const urlStep = Number.isNaN(rawPage) ? 0 : Math.max(0, rawPage - 1);

  return (
    <KidsLessonContent
      key={`${lessonKey}-${ageGroup}`}
      lessonKey={lessonKey!}
      ageGroup={ageGroup}
      urlView={urlView}
      urlStep={urlStep}
      searchParams={searchParams}
      setSearchParams={setSearchParams}
    />
  );
}

interface KidsLessonContentProps {
  lessonKey: string;
  ageGroup: "younger" | "older";
  urlView: "lesson" | "quiz";
  urlStep: number;
  searchParams: URLSearchParams;
  setSearchParams: ReturnType<typeof useSearchParams>[1];
}

function KidsLessonContent({
  lessonKey,
  ageGroup,
  urlView,
  urlStep,
  searchParams,
  setSearchParams,
}: KidsLessonContentProps) {
  const lesson = kidsLessons.find(
    (l) => String(l.id) === String(lessonKey) || l.slug === lessonKey
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

  const mascotPose = isAudioPlaying
    ? "talking" as const
    : ((step?.mascotPose || "idle") as "idle" | "talking" | "thinking" | "celebrating" | "encouraging");

  const updateLessonUrl = useCallback(
    (nextStep: number, nextView = "lesson") => {
      const params = new URLSearchParams(searchParams);
      params.set("age", ageGroup);
      params.set("page", String(nextStep + 1));
      params.set("view", nextView);
      setSearchParams(params);
    },
    [ageGroup, searchParams, setSearchParams]
  );

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
      <div className="text-center py-16 px-8">
        <Mascot pose="thinking" size={120} />
        <h2 className="text-foreground mt-4 mb-2">Lesson not found</h2>
        <Link to="/advice/kids?age=younger" className="text-primary font-semibold no-underline">
          Back to Kids Zone
        </Link>
      </div>
    );
  }

  const lessonIndex = kidsLessons.findIndex((l) => l.id === lesson.id);
  const nextLesson = kidsLessons[lessonIndex + 1];
  const prevLesson = kidsLessons[lessonIndex - 1];

  return (
    <div className="max-w-[800px] mx-auto p-8 max-md:p-5">
      <div className="mb-8">
        <Link
          to={`/advice/kids?age=${ageGroup}`}
          className="inline-block text-primary font-semibold no-underline text-sm mb-4 hover:underline"
        >
          &larr; All Lessons
        </Link>
        <div className="flex items-center gap-3 mb-1">
          <span className="text-3xl">{lesson.icon}</span>
          <h1 className="text-3xl text-foreground max-md:text-2xl">{lesson.title}</h1>
        </div>
        <p className="text-warm-muted text-base">{lesson.subtitle}</p>
      </div>

      <div className="min-h-[620px] max-md:min-h-0">
        {!isQuizActive && step && (
          <div className="flex flex-col animate-[lessonFadeIn_0.4s_ease-out]" key={currentStep}>
            <div className="relative w-full h-[350px] rounded-2xl overflow-hidden mb-6 bg-kidney-300 max-md:h-[220px]">
              <img
                src={step.image}
                alt={step.imageAlt}
                className={cn(
                  "w-full h-full object-cover transition-opacity duration-400",
                  imageLoaded ? "opacity-100" : "opacity-0"
                )}
                onLoad={() => setImageLoaded(true)}
                onError={(event) => {
                  const target = event.currentTarget as HTMLImageElement;
                  if (target.dataset.fallbackApplied === "1") {
                    setImageLoaded(true);
                    return;
                  }
                  target.dataset.fallbackApplied = "1";
                  target.src = fallbackImage;
                  setImageLoaded(true);
                }}
              />
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gradient-to-br from-kidney-50 to-kidney-100 flex items-center justify-center">
                  <span className="text-5xl opacity-30">🎨</span>
                </div>
              )}
            </div>

            <div className="flex items-start gap-4 mb-4 max-md:flex-col max-md:items-center">
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
          <div className="flex flex-col animate-[lessonFadeIn_0.4s_ease-out]">
            <h2 className="text-xl text-foreground mb-5 text-center">
              Test Your Knowledge! &#9989;
            </h2>
            <Quiz questions={quiz} onComplete={() => {}} />
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
        <div className="flex justify-between mt-8 pt-6 border-t border-border max-md:flex-col max-md:gap-3 max-md:items-stretch max-md:text-center">
          {prevLesson && (
            <Link
              to={`/advice/kids/${prevLesson.slug || prevLesson.id}?age=${ageGroup}&page=1&view=lesson`}
              className="text-primary font-semibold no-underline text-sm px-4 py-2 rounded-xl bg-kidney-50 transition-all hover:bg-kidney-100 mr-auto max-md:mr-0"
            >
              &larr; {prevLesson.title}
            </Link>
          )}
          {nextLesson && (
            <Link
              to={`/advice/kids/${nextLesson.slug || nextLesson.id}?age=${ageGroup}&page=1&view=lesson`}
              className="text-primary font-semibold no-underline text-sm px-4 py-2 rounded-xl bg-kidney-50 transition-all hover:bg-kidney-100 ml-auto max-md:ml-0"
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
