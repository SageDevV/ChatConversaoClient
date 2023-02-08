import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SalaDeEspera = ({ entrarNaSala }) => {
    const [usuario, setUsuario] = useState();
    const [sala, setSala] = useState();

    return (
        <Form
            className="lobby"
            onSubmit={(e) => {
                e.preventDefault();
                entrarNaSala(usuario, sala);
            }}
        >
            <Form.Group>
                <Form.Control
                    placeholder="Nome"
                    onChange={(e) => setUsuario(e.target.value)}
                />
                <Form.Control
                    placeholder="Sala"
                    onChange={(e) => setSala(e.target.value)}
                />
            </Form.Group>
            <Button variant="success" type="submit" disabled={!usuario || !sala}>
                Entrar
            </Button>
        </Form>
    );
};

export default SalaDeEspera;
