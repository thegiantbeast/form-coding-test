import React, { useContext, useEffect, useCallback } from 'react';
import {AppContext} from '../../context/ContextStore'

function Questions() {
  const context = useContext(AppContext)

  const handleArrowKeys = useCallback(
    (e) => {
      if (e.keyCode === 37) {
        context.handlePreviousQuestion()
      } else if (e.keyCode === 39) {
        context.handleNextQuestion()
      }
    },
    [context]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleArrowKeys)
    return () => {
      window.removeEventListener('keydown', handleArrowKeys)
    }
  }, [handleArrowKeys])

  return (
      <>
        <h2>Questions #{context.currentQuestion}</h2>
        {context.questions.map((question, idx) => (
          <div key={idx} style={{display: `${context.currentQuestion === idx ? 'block' : 'none'}`}}>
            <form onSubmit={context.handleSubmit}>
              <label>
                {question}
                <input type="text" name={`answer-${idx}`} onChange={context.handleInputChange} value={context.answers[`answer-${idx}`] || ''} />
              </label>
              <button id={`submit-${idx}`}>OK</button>
            </form>
          </div>
        ))}
        <button onClick={context.handlePreviousQuestion}> &lt; </button>
        <button onClick={context.handleNextQuestion}> &gt; </button>
      </>
  );
}

export default Questions;
