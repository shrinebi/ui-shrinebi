import { describe, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { Dashboard } from '../Dashboard';

describe('Dashboard Page', () => {
    it('Should render without errors', () => {
       render(<Dashboard />);
       const dashboard = screen.getByTestId("dashboard-page");
       expect(dashboard).toBeTruthy();
    });
});
