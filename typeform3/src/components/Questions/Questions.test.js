import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ContextStoreProvider from '../../context/ContextStore'
import Questions from './Questions';

const questions = [
  'Who am I?',
  'Who?'
]

const answers = [
  'Ricardo Ferreira',
  'RF'
]

const currentQuestion = 0

const wrapper = (component) => {
  return render(
    <ContextStoreProvider initialState={{
      questions,
      answers,
      currentQuestion
    }}>
      {component}
    </ContextStoreProvider>
  )
}

test('renders questions', () => {
  const { getByText, getByLabelText } = wrapper(<Questions />);
  const textElement = getByText(/Questions/i);

  expect(textElement).toBeInTheDocument();

  questions.forEach((question) => {
    const inputNode = getByLabelText(question);
    expect(inputNode).toBeInTheDocument()
  })
});

test('enter key moves to next question', () => {
  const { getByLabelText } = wrapper(<Questions />);
  const currentQuestion = getByLabelText(questions[0]);
  const nextQuestion = getByLabelText(questions[1]);

  fireEvent.submit(currentQuestion)

  expect(nextQuestion).toBeVisible()
})

test('stores answer', () => {
  const { getByLabelText } = wrapper(<Questions />);

  const inputNode = getByLabelText(questions[0]);
  fireEvent.change(inputNode, { target: { value: answers[0] }})
  expect(inputNode.value).toBe(answers[0])
});


test('can move between questions', () => {
  const { getByText, getByLabelText } = wrapper(<Questions />);
  const previousButton = getByText('<')
  const nextButton = getByText('>')

  const expectVisibleQuestion = (question) => {
    const inputNode = getByLabelText(question)
    expect(inputNode).toBeVisible()
  }

  nextButton.click()
  expectVisibleQuestion(questions[1])

  nextButton.click()
  expectVisibleQuestion(questions[1])

  previousButton.click()
  expectVisibleQuestion(questions[0])

  previousButton.click()
  expectVisibleQuestion(questions[0])
})

test('left and right arrow keys move between qestions', () => {
  const { container, getByLabelText } = wrapper(<Questions />);

  const expectVisibleQuestion = (question) => {
    const inputNode = getByLabelText(question)
    expect(inputNode).toBeVisible()
  }

  fireEvent.keyDown(container, { key: 'ArrowRight', keyCode: 39 })
  expectVisibleQuestion(questions[1])

  fireEvent.keyDown(container, { key: 'ArrowLeft', keyCode: 37 })
  expectVisibleQuestion(questions[0])
})