import { useState } from 'react';

interface AnimeForm {
    title: string;
    description: string;
    price: number;
}

const useAnimeForm = (initialForm: AnimeForm, onSubmit: (form: AnimeForm) => void) => {
    const [form, setForm] = useState<AnimeForm>(initialForm);
    const [error, setError] = useState<string | null>(null);

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: name === 'price' ? parseFloat(value) : value
        }));
    };

    const validateForm = () => {
        if (form.price <= 0) {
            setError('Price must be greater than zero.');
            return false;
        }
        if (!form.title.trim()) {
            setError('Title cannot be empty.');
            return false;
        }
        if (!form.description.trim()) {
            setError('Description cannot be empty.');
            return false;
        }
        setError(null);
        return true;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            onSubmit(form);
        }
    };

    return {
        form,
        error,
        handleFormChange,
        handleSubmit,
    };
};

export default useAnimeForm;
