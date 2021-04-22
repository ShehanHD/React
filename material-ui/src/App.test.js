import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);

  expect(getByText("Click")).toBeInTheDocument();
});

test('renders learn react link', () => {
  const { getByText } = render(<App />);

  expect(getByText("Testing")).toBeInTheDocument();
});