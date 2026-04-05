import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Mascot from "./Mascot";

interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  mascotCorrect: string;
  mascotWrong: string;
}

interface QuizProps {
  questions: QuizQuestion[];
  onComplete?: (score: number) => void;
}

function Quiz({ questions, onComplete }: QuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = questions[currentIndex];
  const isCorrect = selectedOption === question?.correctIndex;

  const handleSelect = (optionIndex: number) => {
    if (showResult) return;
    setSelectedOption(optionIndex);
    setShowResult(true);
    if (optionIndex === question.correctIndex) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedOption(null);
      setShowResult(false);
    } else {
      setFinished(true);
      onComplete?.(score + (isCorrect ? 1 : 0));
    }
  };

  if (finished) {
    const finalScore = score;
    const total = questions.length;
    const isPerfect = finalScore === total;

    return (
      <div className="flex items-center gap-6 p-8 bg-gradient-to-br from-kidney-50 to-[#fff5e6] rounded-2xl border-2 border-kidney-100 max-sm:flex-col max-sm:text-center">
        <Mascot pose={isPerfect ? "celebrating" : "encouraging"} size={100} />
        <div>
          <h3 className="text-2xl text-foreground mb-1">
            {isPerfect
              ? "Perfect Score!"
              : finalScore >= total / 2
                ? "Great Job!"
                : "Good Try!"}
          </h3>
          <p className="text-lg text-warm-muted mb-2">
            {finalScore} / {total} correct
          </p>
          <div className="flex gap-1">
            {Array.from({ length: total }, (_, i) => (
              <span
                key={i}
                className={cn(
                  "text-2xl transition-colors duration-300",
                  i < finalScore ? "text-[#f1c40f]" : "text-border"
                )}
              >
                &#9733;
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-kidney-50 to-[#fff5e6] rounded-2xl p-8 border-2 border-kidney-100 max-sm:p-5">
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm text-warm-muted font-semibold bg-white px-3 py-1 rounded-xl">
          Question {currentIndex + 1} of {questions.length}
        </span>
      </div>

      <h3 className="text-xl text-foreground mb-6 leading-snug">
        {question.question}
      </h3>

      <div className="flex flex-col gap-3 mb-6">
        {question.options.map((option, i) => {
          let variant: "default" | "correct" | "wrong" | "idle" = "idle";
          if (showResult) {
            if (i === question.correctIndex) variant = "correct";
            else if (i === selectedOption) variant = "wrong";
          } else if (i === selectedOption) {
            variant = "default";
          }

          return (
            <button
              key={i}
              className={cn(
                "flex items-center gap-3 py-3.5 px-5 rounded-xl border-2 bg-white text-left text-base text-foreground transition-all duration-200",
                variant === "idle" && "border-border hover:border-primary hover:bg-kidney-50 hover:translate-x-1 cursor-pointer",
                variant === "default" && "border-primary bg-kidney-50",
                variant === "correct" && "border-success bg-[#eafaf1] text-[#1a6b3c]",
                variant === "wrong" && "border-destructive bg-[#fef0ef] text-[#8b2020]",
                showResult && "cursor-default"
              )}
              onClick={() => handleSelect(i)}
              disabled={showResult}
            >
              <span
                className={cn(
                  "flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm shrink-0",
                  variant === "correct" && "bg-success text-white",
                  variant === "wrong" && "bg-destructive text-white",
                  variant !== "correct" && variant !== "wrong" && "bg-kidney-100 text-primary"
                )}
              >
                {String.fromCharCode(65 + i)}
              </span>
              <span className="flex-1">{option}</span>
            </button>
          );
        })}
      </div>

      {showResult && (
        <div
          className={cn(
            "flex items-start gap-4 p-4 rounded-xl mb-4 animate-[feedbackSlide_0.3s_ease-out]",
            isCorrect
              ? "bg-[#eafaf1] border border-[#a3d9b1]"
              : "bg-[#fef0ef] border border-[#f5b7b1]"
          )}
        >
          <Mascot pose={isCorrect ? "celebrating" : "encouraging"} size={60} />
          <p className="text-foreground text-[0.95rem] leading-relaxed pt-2">
            {isCorrect ? question.mascotCorrect : question.mascotWrong}
          </p>
        </div>
      )}

      {showResult && (
        <Button
          className="mx-auto block"
          onClick={handleNext}
        >
          {currentIndex < questions.length - 1
            ? "Next Question"
            : "See Results"}{" "}
          &rarr;
        </Button>
      )}
    </div>
  );
}

export default Quiz;
