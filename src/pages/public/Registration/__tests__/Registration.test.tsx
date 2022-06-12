import { describe, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { Registration } from '../Registration';

describe('Registration Page', () => {
    it('Should render without errors', () => {
       render(< Registration/>);
       const login = screen.getByTestId("registration-page");
       expect(login).toBeTruthy();
    });
});
