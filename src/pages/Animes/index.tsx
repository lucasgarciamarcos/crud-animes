import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import AnimeCard from '../../components/AnimeCard';
import AnimeModal from '../../components/AnimeModal';

interface Anime {
    id: number;
    title: string;
    description: string;
    price: number;
}

const Animes: React.FC = () => {
    const [animes, setAnimes] = useState<Anime[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [editingAnime, setEditingAnime] = useState<Anime | null>(null);

    useEffect(() => {
        const storedAnimes = localStorage.getItem('animes');
        if (storedAnimes) {
            setAnimes(JSON.parse(storedAnimes));
        } else {
            const defaultAnimes = [
                { id: 1, title: 'Naruto', description: 'A young ninja striving to be the best', price: 5.99 },
                { id: 2, title: 'One Piece', description: 'A pirate adventure', price: 6.99 },
                { id: 3, title: 'Attack on Titan', description: 'Humanity vs Titans', price: 7.99 },
            ];
            setAnimes(defaultAnimes);
            localStorage.setItem('animes', JSON.stringify(defaultAnimes));
        }
    }, []);

    useEffect(() => {
        if (animes.length > 0) {
            localStorage.setItem('animes', JSON.stringify(animes));
        }
    }, [animes]);

    const handleShowModal = (anime: Anime | null) => {
        setEditingAnime(anime);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleFormSubmit = (form: { title: string, description: string, price: number }) => {
        if (editingAnime) {
            const updatedAnimes = animes.map(anime =>
                anime.id === editingAnime.id ? { ...anime, ...form } : anime
            );
            setAnimes(updatedAnimes);
        } else {
            const newAnime = {
                id: animes.length + 1,
                title: form.title,
                description: form.description,
                price: form.price
            };
            setAnimes([...animes, newAnime]);
        }
        handleCloseModal();
    };

    const handleDeleteAnime = (id: number) => {
        const updatedAnimes = animes.filter(anime => anime.id !== id);
        setAnimes(updatedAnimes);
    };

    return (
        <Container>
            <Row className="mt-5">
                <Col>
                    <h1 className="text-center">Anime CRUD</h1>
                </Col>
            </Row>
            <Row className="mt-4">
                {animes.map(anime => (
                    <Col key={anime.id} sm={12} md={6} lg={4} className="mb-4">
                        <AnimeCard anime={anime} onEdit={() => handleShowModal(anime)} onDelete={handleDeleteAnime} />
                    </Col>
                ))}
            </Row>
            <Row className="mt-4">
                <Col className="text-center">
                    <Button variant="success" onClick={() => handleShowModal(null)}>Add New Anime</Button>
                </Col>
            </Row>

            <AnimeModal
                show={showModal}
                onHide={handleCloseModal}
                onSubmit={handleFormSubmit}
                initialForm={editingAnime ? { title: editingAnime.title, description: editingAnime.description, price: editingAnime.price } : { title: '', description: '', price: 0 }}
                editingAnime={editingAnime}
            />
        </Container>
    );
};

export default Animes;
