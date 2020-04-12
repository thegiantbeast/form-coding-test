import React from 'react'

const Questions = ({ questions }) => {
  return <>
    {questions.map((question, idx) => {
      return (
        <div key={idx}>
          <label htmlFor="answer">{question}</label><br/>
          <input type="text" id="answer" name="answer" />
        </div>
      )
    })}
  </>
}

export default Questions;