import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface LessonProgressProps {
  currentStep: number;
  totalSteps: number;
  hasQuiz: boolean;
  isQuizActive: boolean;
  onBack: () => void;
  onNext: () => void;
  onStartQuiz: () => void;
  canGoBack: boolean;
  canGoNext: boolean;
}

function LessonProgress({
  currentStep,
  totalSteps,
  hasQuiz,
  isQuizActive,
  onBack,
  onNext,
  onStartQuiz,
  canGoBack,
  canGoNext,
}: LessonProgressProps) {
  const totalDots = totalSteps + (hasQuiz ? 1 : 0);
  const activeDot = isQuizActive ? totalSteps : currentStep;
  const progressPercent = ((activeDot + 1) / totalDots) * 100;

  return (
    <div className="mt-8">
      <div className="w-full h-1.5 bg-border rounded-sm overflow-hidden mb-4">
        <div
          className="h-full bg-gradient-to-r from-primary to-destructive rounded-sm transition-all duration-400"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="flex justify-between items-center">
        <Button
          variant="outline"
          size="sm"
          className="min-w-[100px] max-sm:min-w-[80px] max-sm:px-3.5 max-sm:text-xs"
          onClick={onBack}
          disabled={!canGoBack}
          aria-label="Previous step"
        >
          &larr; Back
        </Button>

        <div className="flex gap-2 items-center max-sm:gap-1.5">
          {Array.from({ length: totalDots }, (_, i) => {
            const isQuizDot = i === totalSteps;
            return (
              <span
                key={i}
                className={cn(
                  "transition-all duration-300",
                  isQuizDot
                    ? "w-[18px] h-2.5 rounded-sm max-sm:w-3.5 max-sm:h-2"
                    : "w-2.5 h-2.5 rounded-full max-sm:w-2 max-sm:h-2",
                  i < activeDot && "bg-success",
                  i === activeDot && "bg-primary scale-130",
                  i > activeDot && "bg-border"
                )}
              />
            );
          })}
        </div>

        {!isQuizActive && currentStep === totalSteps - 1 && hasQuiz ? (
          <Button
            size="sm"
            className="min-w-[100px] animate-[quizPulse_2s_ease-in-out_infinite] max-sm:min-w-[80px] max-sm:px-3.5 max-sm:text-xs"
            onClick={onStartQuiz}
          >
            Take Quiz &rarr;
          </Button>
        ) : (
          <Button
            variant="outline"
            size="sm"
            className="min-w-[100px] max-sm:min-w-[80px] max-sm:px-3.5 max-sm:text-xs"
            onClick={onNext}
            disabled={!canGoNext || isQuizActive}
            aria-label="Next step"
          >
            Next &rarr;
          </Button>
        )}
      </div>
    </div>
  );
}

export default LessonProgress;
