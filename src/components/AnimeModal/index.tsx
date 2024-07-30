import React from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import useAnimeForm from '../../hooks/useAnimeForm';

interface AnimeModalProps {
    show: boolean;
    onHide: () => void;
    onSubmit: (form: { title: string, description: string, price: number }) => void;
    initialForm: { title: string, description: string, price: number };
    editingAnime: { id: number, title: string, description: string, price: number } | null;
}

const AnimeModal: React.FC<AnimeModalProps> = ({ show, onHide, onSubmit, initialForm, editingAnime }) => {
    const { form, error, handleFormChange, handleSubmit } = useAnimeForm(initialForm, onSubmit);

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>{editingAnime ? 'Edit Anime' : 'Add New Anime'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {error && (
                    <Alert variant="danger">
                        {error}
                    </Alert>
                )}
                <Form>
                    <Form.Group controlId="formTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter title"
                            name="title"
                            value={form.title}
                            onChange={handleFormChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formDescription" className="mt-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter description"
                            name="description"
                            value={form.description}
                            onChange={handleFormChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formPrice" className="mt-3">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter price"
                            name="price"
                            value={form.price}
                            onChange={handleFormChange}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    {editingAnime ? 'Save Changes' : 'Add Anime'}
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AnimeModal;
