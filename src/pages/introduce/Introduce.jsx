import React, { useState } from "react";
import "./Introduce.css";
import Dropdown from "../../dropdown/Dropdown";
import { useNavigate } from "react-router-dom";

const Introduce = () => {
  const difficulty = ["easy", "medium", "hard"];
  const [difficultyChange, setDifficultyChange] = useState("");
  const navigate = useNavigate();
  const TOTAL_QUESTIONS = 10;

  console.log(difficultyChange, "difficultyChange");

  const startQuiz = () => {
    if (difficultyChange) {
      navigate(`/quiz/${difficultyChange}/${TOTAL_QUESTIONS}`);
    }
  };
  return (
    <div className="introduce">
      <div className="introduce-container">
        <img
          src="https://scontent.fist6-1.fna.fbcdn.net/v/t39.30808-6/266063662_547905400024321_545818210580367969_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6S8xgEW_SAEAX_TbnU4&_nc_ht=scontent.fist6-1.fna&oh=00_AfAf5mIPzjrD7RPFTuuz6U_5hmnN6C7Sy9czak69pkK49g&oe=654F138D"
          alt=""
          style={{
            width: "300px",
            height: "200px",
            border: "1.5px solid black",
            borderRadius: "10px",
          }}
        />

        <Dropdown data={difficulty} setDifficultyChange={setDifficultyChange} />
        <div onClick={startQuiz} className="introduce-btn">
          Quiz'e başla
        </div>
      </div>
    </div>
  );
};

export default Introduce;
