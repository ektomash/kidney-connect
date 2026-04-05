import { useState } from "react";
import Mascot from "./Mascot";
import "./Quiz.css";

function Quiz({ questions, onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = questions[currentIndex];
  const isCorrect = selectedOption === question?.correctIndex;

  const handleSelect = (optionIndex) => {
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
      <div className="quiz-complete">
        <Mascot pose={isPerfect ? "celebrating" : "encouraging"} size={100} />
        <div className="quiz-complete-text">
          <h3>
            {isPerfect
              ? "Perfect Score!"
              : finalScore >= total / 2
                ? "Great Job!"
                : "Good Try!"}
          </h3>
          <p className="quiz-score">
            {finalScore} / {total} correct
          </p>
          <div className="quiz-stars">
            {Array.from({ length: total }, (_, i) => (
              <span key={i} className={`quiz-star ${i < finalScore ? "earned" : ""}`}>
                &#9733;
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <span className="quiz-counter">
          Question {currentIndex + 1} of {questions.length}
        </span>
      </div>

      <h3 className="quiz-question">{question.question}</h3>

      <div className="quiz-options">
        {question.options.map((option, i) => {
          let optionClass = "quiz-option";
          if (showResult) {
            if (i === question.correctIndex) optionClass += " correct";
            else if (i === selectedOption) optionClass += " wrong";
          } else if (i === selectedOption) {
            optionClass += " selected";
          }

          return (
            <button
              key={i}
              className={optionClass}
              onClick={() => handleSelect(i)}
              disabled={showResult}
            >
              <span className="option-letter">
                {String.fromCharCode(65 + i)}
              </span>
              <span className="option-text">{option}</span>
            </button>
          );
        })}
      </div>

      {showResult && (
        <div className={`quiz-feedback ${isCorrect ? "correct" : "wrong"}`}>
          <Mascot
            pose={isCorrect ? "celebrating" : "encouraging"}
            size={60}
          />
          <p>
            {isCorrect ? question.mascotCorrect : question.mascotWrong}
          </p>
        </div>
      )}

      {showResult && (
        <button className="quiz-next-btn" onClick={handleNext}>
          {currentIndex < questions.length - 1 ? "Next Question" : "See Results"}{" "}
          &rarr;
        </button>
      )}
    </div>
  );
}

export default Quiz;
