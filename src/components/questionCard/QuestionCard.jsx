import React, { useState } from "react";
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
  const [timer, setTimer] = useState(30);

  const approvedChoice = (e) => {
    console.log(e.currentTarget.value);
    const checkAnswer =
      e.currentTarget.value == questionData[count]?.correct_answer;
    console.log(checkAnswer);
  };

  return (
    <div className="questionCard">
      <div className="questionCard-title">
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
