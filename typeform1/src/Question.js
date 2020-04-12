import React from 'react';

const Question = ({ idx, title, question, visible }) => {
    const display = visible ? 'block' : 'none'
    return (
        <div id={`question-${idx}`} style={{display: display}}>
          <h1>{title}</h1>
          <label htmlFor="question-label">{question}</label>
          <input type="text" id="question-label" />
        </div>
      );
}

export default Question;