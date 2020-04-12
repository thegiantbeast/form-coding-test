import React from 'react';
import ContextStoreProvider from './context/ContextStore'
import Questions from './components/Questions/Questions'
import './App.css';

function App() {
  return (
    <ContextStoreProvider>
      <div className="App">
        <Questions />
      </div>
    </ContextStoreProvider>
  );
}

export default App;
