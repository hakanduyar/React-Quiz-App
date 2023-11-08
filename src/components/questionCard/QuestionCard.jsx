import React from "react";
import "./QuestionsCard.css";

const QuestionCard = ({
  questionData,
  score,
  setScore,
  count,
  setCount,
  modal,
  setModal,
}) => {
  return (
    <div className="questionCard">
      <div>
        {count + 1}/10 - {questionData[count]?.question}
      </div>
    </div>
  );
};

export default QuestionCard;
