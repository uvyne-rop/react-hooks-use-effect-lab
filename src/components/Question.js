import React, { useEffect, useState } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  // add useEffect code
useEffect(() => {
  const timer = setTimeout(() => {
    setTimeRemaining((prevTime) => Math.max(prevTime - 1, 0));

  }, 1000);
  return () => {
    clearTimeout(timer);
  };
}, [timeRemaining]);
useEffect(() => {
  if (timeRemaining === 0) {
    onAnswered(false);
    setTimeRemaining(10);
  }
}, [timeRemaining, onAnswered]);

   function handleAnswer(isCorrect) {
   onAnswered(isCorrect);
}

const { id, prompt, answers, correctIndex } = question;
  


  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;



