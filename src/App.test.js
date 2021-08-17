import { render, screen } from '@testing-library/react';
import App from './App';

test('should render when get-by-text "pair"', () => {
  render(<App />);
  const element = screen.getByText(/pair/i);
  expect(element).toBeInTheDocument();
});
test('should fail on get-by-text "xyz"', () => {
  render(<App />);
  const element = screen.getByText(/xyz/i);
  expect(element).toBeInTheDocument();
});
