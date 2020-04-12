import React from 'react';
import { render } from '@testing-library/react';
import Questions from './Questions';

test('renders questions', () => {
  const questions = [
    'FirstName?',
    'LastName?'
  ]
  const { getByLabelText } = render(<Questions questions={questions} />);

  questions.forEach((question) => {
    const inputNode = getByLabelText(question);
    expect(inputNode).toBeInTheDocument();
  })
});
