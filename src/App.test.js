import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

let mockValue = {};
const mockSetValue = jest.fn();

jest.mock('./store/localStore', () => {
  return () => [mockValue, mockSetValue];
});

test('renders Login Page', () => {
  const { getByLabelText } = render(
    <App />
  );

  expect(getByLabelText('Username')).toBeInTheDocument();
  expect(getByLabelText('Password')).toBeInTheDocument();
});

test('renders Home Page', () => {
  mockValue = {
    name: "John Doe",
    username: "john.doe@domain.com",
    password: "jOhn"
  };

  const { getByText } = render(
    <App />
  );

  expect(getByText('Home')).toBeInTheDocument();
  expect(getByText('Logout')).toBeInTheDocument();
  expect(getByText('John Doe')).toBeInTheDocument();
  expect(getByText('ClearStore')).toBeInTheDocument();
});
