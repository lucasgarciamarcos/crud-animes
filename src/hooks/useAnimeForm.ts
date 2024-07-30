import { useState, useEffect } from 'react';

interface AnimeForm {
    title: string;
    description: string;
    price: number;
}

const useAnimeForm = (initialForm: AnimeForm, onSubmit: (form: AnimeForm) => void) => {
    const [form, setForm] = useState(initialForm);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setForm(initialForm);
    }, [initialForm]);

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: name === 'price' ? parseFloat(value) : value
        }));
    };

    const handleSubmit = () => {
        if (!form.title || !form.description || isNaN(form.price)) {
            setError('Please fill out all fields correctly.');
            return;
        }
        setError(null);
        onSubmit(form);
    };

    return { form, error, handleFormChange, handleSubmit };
};

export default useAnimeForm;
