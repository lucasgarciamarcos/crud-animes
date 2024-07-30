import React from 'react';
import { Card, Button } from 'react-bootstrap';

interface AnimeCardProps {
    anime: { id: number; title: string; description: string; price: number };
    onEdit: () => void;
    onDelete: (id: number) => void;
    onConvert: () => void;
}

const AnimeCard: React.FC<AnimeCardProps> = ({ anime, onEdit, onDelete, onConvert }) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{anime.title}</Card.Title>
                <Card.Text>{anime.description}</Card.Text>
                <Card.Text>
                    <strong>Price:</strong> ${anime.price.toFixed(2)}
                </Card.Text>
                <Button variant="primary" onClick={onEdit}>Edit</Button>{' '}
                <Button variant="danger" onClick={() => onDelete(anime.id)}>Delete</Button>{' '}
                <Button className="custom-convert-btn" variant="info" onClick={onConvert}>Convert Price</Button>
            </Card.Body>
        </Card>
    );
};

export default AnimeCard;
