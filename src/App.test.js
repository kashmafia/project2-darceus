import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

test('header sign in', () => {
  render(<App />);
  const linkElement = screen.getByText('Sign in');
  expect(linkElement).toBeInTheDocument();
});

test('header about us', () => {
  render(<App />);
  const aboutElement = screen.getByText('About Us');
  expect(aboutElement).toBeInTheDocument();
});