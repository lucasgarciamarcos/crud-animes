import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App Component', () => {
    it('renders the main heading', () => {
        render(<App />);
        const headingElement = screen.getByText(/Anime CRUD/i);
        expect(headingElement).toBeInTheDocument();
    });
});
