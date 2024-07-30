import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CurrencyConverterModal from '../../components/CurrencyConverterModal'; // Ajuste o caminho conforme necessário

describe('CurrencyConverterModal Component', () => {
    it('renders the modal with the correct price', () => {
        render(<CurrencyConverterModal show={true} onHide={jest.fn()} price={5.99} />);

        expect(screen.getByText(/\$5.99/i)).toBeInTheDocument();
    });

    it('closes the modal when the close button is clicked', () => {
        const handleHide = jest.fn();
        render(<CurrencyConverterModal show={true} onHide={handleHide} price={5.99} />);

        fireEvent.click(screen.getByText(/Close/i));

        expect(handleHide).toHaveBeenCalled();
    });
});
