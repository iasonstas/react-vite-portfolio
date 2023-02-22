import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { WrappedApp, App } from './App';

describe('App', () => {
    it('Renders hello world', () => {
        // ARRANGE
        render(<WrappedApp />);
        // ACT
        //   click a button or fill out an input
        // EXPECT
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
            'Hello World'
        );
    });
    it('landing on home', () => {
        const homeRoute = '/';
        render(
            <MemoryRouter initialEntries={[homeRoute]}>
                <App />
            </MemoryRouter>
        );
        // verify navigation to "Not Found" route
        expect(screen.getByText(/Hello World/i)).toBeInTheDocument();
    });

    it('landing on a not found page', () => {
        const badRoute = '/badroute';
        render(
            <MemoryRouter initialEntries={[badRoute]}>
                <App />
            </MemoryRouter>
        );
        // verify navigation to "Not Found" route
        expect(screen.getByText(/Not Found/i)).toBeInTheDocument();
    });
});
