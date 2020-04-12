import React, { createContext, useState, useReducer, useCallback } from 'react'
import store from './store'

export const AppContext = createContext()

const answersReducer = (state, action) => {
  switch(action.type) {
    case "ADD_ANSWER":
      return {
        ...state,
        [action.payload.key]: action.payload.value
      }
    default:
      return state
  }
}

const ContextStoreProvider = (props) => {
  const initialState = props.initialState || store
  const questions = initialState.questions

  const storedAnswers = localStorage.getItem('myAwesomeAnswers')
  const initialReducerState = storedAnswers ? JSON.parse(storedAnswers) : initialState.answers

  const [currentQuestion, setCurrentQuestion] = useState(initialState.currentQuestion)
  const [answers, setAnswers] = useReducer(answersReducer, initialReducerState)

  const handleInputChange = (e) => {
    const name = e.target.name;

    setAnswers({
      type: 'ADD_ANSWER',
      payload: {
        key: name,
        value: e.target.value
      }
    })
  }

  React.useEffect(
    () => {
      localStorage.setItem('myAwesomeAnswers', JSON.stringify(answers));
    },
    [answers]
  );

  const handleSubmit = (e) => {
    e.preventDefault()
    handleNextQuestion()
  }

  const handlePreviousQuestion = useCallback(
    () => {
      const previousQuestion = currentQuestion - 1
      if (previousQuestion >= 0) {
        setCurrentQuestion(previousQuestion)
      }
    },
    [currentQuestion, setCurrentQuestion]
  )

  const handleNextQuestion = useCallback(
    () => {
      const nextQuestion = currentQuestion + 1
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion)
      }
    },
    [currentQuestion, setCurrentQuestion, questions.length]
  )

  return (
    <AppContext.Provider value={{
      questions,
      answers,
      setAnswers,
      currentQuestion,
      handleInputChange,
      handleSubmit,
      handlePreviousQuestion,
      handleNextQuestion
    }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default ContextStoreProvider