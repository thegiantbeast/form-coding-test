import React, { useState, useEffect } from 'react';
import './App.css';
import Question from './Question';

function App({ questions }) {
  const [currQuestion, setCurrQuestion] = useState(0);

  const allQuestions = questions.map((question, idx) => {
    const visible = currQuestion == idx ? true : false
    return <Question key={idx} idx={idx} title={question.title} question={question.question} visible={visible} />
  })

  const handlePreviousArrow = () => {
    const previous = currQuestion - 1
    const previousQuestion = previous > 0 ? previous : 0
    setCurrQuestion(previousQuestion)
  }

  const handleNextArrow = () => {
    const next = currQuestion + 1
    const totalQuestions = questions.length - 1
    const nextQuestion = next <= totalQuestions ? next : totalQuestions
    setCurrQuestion(nextQuestion)
  }

  return (
    <div>
      {allQuestions}
      <div>
        <button id="previous-arrow" onClick={handlePreviousArrow}> &lt; </button>
        <button id="next-arrow" onClick={handleNextArrow}> &gt; </button>
      </div>
    </div>
  );
}

export default App;
