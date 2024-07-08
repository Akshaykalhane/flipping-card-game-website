import React from "react";
import styles from "./gameResult.module.css";

export default function GameResult({
  score,
  seconds,
  setIsGameStarted,
  setGameNo,
  setShowResult,
  shuffleCards,
}) {
  return (
    <div className={`flex-row-center ${styles.GameResult}`}>
      <div className={`flex-col-center ${styles.mainContainer}`}>
        <p>Score: {score}</p>
        <p>
          {score === 6
            ? "Congratulations...!🥳 You Won"
            : "Better Luck Next Time"}
        </p>

        <button
          onClick={() => {
            setIsGameStarted(true);
            setGameNo((prev) => prev++);
            setShowResult(false);
            shuffleCards();
          }}
          className={`btn flex-row-center ${styles.playBtn}`}
        >
          {score === 6 ? "PLAY AGAIN" : "TRY AGAIN"}
        </button>
      </div>
    </div>
  );
}
