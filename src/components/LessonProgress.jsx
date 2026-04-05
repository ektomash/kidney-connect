import "./LessonProgress.css";

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
}) {
  const totalDots = totalSteps + (hasQuiz ? 1 : 0);
  const activeDot = isQuizActive ? totalSteps : currentStep;
  const progressPercent = ((activeDot + 1) / totalDots) * 100;

  return (
    <div className="lesson-progress">
      <div className="progress-bar-track">
        <div
          className="progress-bar-fill"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="progress-controls">
        <button
          className="progress-nav-btn"
          onClick={onBack}
          disabled={!canGoBack}
          aria-label="Previous step"
        >
          &larr; Back
        </button>

        <div className="progress-dots">
          {Array.from({ length: totalDots }, (_, i) => {
            const isQuizDot = i === totalSteps;
            let dotClass = "progress-dot";
            if (i < activeDot) dotClass += " completed";
            if (i === activeDot) dotClass += " active";
            if (isQuizDot) dotClass += " quiz-dot";

            return <span key={i} className={dotClass} />;
          })}
        </div>

        {!isQuizActive && canGoNext && currentStep === totalSteps - 1 && hasQuiz ? (
          <button className="progress-nav-btn quiz-start-btn" onClick={onStartQuiz}>
            Take Quiz &rarr;
          </button>
        ) : (
          <button
            className="progress-nav-btn"
            onClick={onNext}
            disabled={!canGoNext || isQuizActive}
            aria-label="Next step"
          >
            Next &rarr;
          </button>
        )}
      </div>
    </div>
  );
}

export default LessonProgress;
