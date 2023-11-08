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
  const approvedChoice = (e) => {
    console.log(e.currentTarget.value);
  };

  return (
    <div className="questionCard">
      <div>
        {count + 1}/10 - {questionData[count]?.question}
      </div>
      {questionData[count]?.answers?.map((answer, i) => (
        <button onClick={approvedChoice} key={i} value={answer}>
          {answer}
        </button>
      ))}
    </div>
  );
};

export default QuestionCard;
