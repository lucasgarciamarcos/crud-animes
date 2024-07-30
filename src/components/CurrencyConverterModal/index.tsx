import React from 'react';
import { Modal, Button, Table } from 'react-bootstrap';

interface CurrencyConverterModalProps {
    show: boolean;
    onHide: () => void;
    price: number;
}

const currencyRates = {
    USD: 1,
    EUR: 0.93,
    JPY: 139.56,
    GBP: 0.79,
    BRL: 5.35
};

const CurrencyConverterModal: React.FC<CurrencyConverterModalProps> = ({ show, onHide, price }) => {
    const convertPrice = (rate: number) => (price * rate).toFixed(2);

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Convert Price</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Currency</th>
                            <th>Converted Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(currencyRates).map(([currency, rate]) => (
                            <tr key={currency}>
                                <td>{currency}</td>
                                <td>${convertPrice(rate)}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CurrencyConverterModal;
