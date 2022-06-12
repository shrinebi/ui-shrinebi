import { describe, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { Login } from '../Login';

describe('Login Page', () => {
    it('Should render without errors', () => {
       render(<Login />);
       const login = screen.getByTestId("login-page");
       expect(login).toBeTruthy();
    });
});
