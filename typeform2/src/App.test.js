import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders questions', () => {
  const questions = [
    'FirstName?',
    'LastName?'
  ]
  const { getByText, getByLabelText } = render(<App />);
  const textElement = getByText(/Questions/i);

  expect(textElement).toBeInTheDocument();

  questions.forEach((question) => {
    const inputNode = getByLabelText(question)
    expect(inputNode).toBeInTheDocument()
  })
});
