import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders question with input', () => {
  const questions = [
    { title: "Question #1", question: "Name?" }
  ]
  const { getByText } = render(<App questions={questions} />);
});
