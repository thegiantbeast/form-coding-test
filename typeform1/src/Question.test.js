import React from 'react';
import { render } from '@testing-library/react';
import Question from './Question';

test('renders question with input', () => {
  const { getByText, getByLabelText } = render(
    <Question
        title="Question #1"
        question="Name?"
    />
  );
  const titleElement = getByText(/Question #\d/i);
  const inputNode = getByLabelText(/name\?/i)

  expect(titleElement).toBeInTheDocument();
  expect(inputNode).toBeInTheDocument();
});
