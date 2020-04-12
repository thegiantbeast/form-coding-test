import React, { useState } from 'react';
import Questions from './Questions';
import './App.css';

function App() {
  const [questions] = useState([
    'FirstName?',
    'LastName?'
  ])

  return (
    <div className="App">
      <h2>Questions</h2>
      <Questions questions={questions} />
    </div>
  );
}

export default App;
