import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AnimeModal from '../../components/AnimeModal'; // Ajuste o caminho conforme necessário

const defaultProps = {
    show: true,
    onHide: jest.fn(),
    onSubmit: jest.fn(),
    initialForm: { title: '', description: '', price: 0 },
    editingAnime: null,
};

describe('AnimeModal Component', () => {
    it('renders the modal with form fields', () => {
        render(<AnimeModal {...defaultProps} />);

        expect(screen.getByLabelText(/Title/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Description/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Price/i)).toBeInTheDocument();
    });

    it('submits the form with the correct data', () => {
        const handleSubmit = jest.fn();
        render(<AnimeModal {...defaultProps} onSubmit={handleSubmit} />);

        fireEvent.change(screen.getByLabelText(/Title/i), { target: { value: 'Naruto' } });
        fireEvent.change(screen.getByLabelText(/Description/i), { target: { value: 'A ninja anime' } });
        fireEvent.change(screen.getByLabelText(/Price/i), { target: { value: '12.99' } });

        fireEvent.click(screen.getByText(/Add Anime/i));

        expect(handleSubmit).toHaveBeenCalledWith({
            title: 'Naruto',
            description: 'A ninja anime',
            price: 12.99,
        });
    });
});
