import { Form, Button, FormControl, InputGroup } from 'react-bootstrap';
import { useState } from 'react';

const EnviarMensagemForm = ({ enviarMensagem }) => {

    const [mensagem, setMensagem] = useState('');

    return (
        <Form
            onSubmit={e => {
                e.preventDefault();
                enviarMensagem(mensagem);
                setMensagem('');
            }}>
            <InputGroup>
                <FormControl type="user" placeholder="mensagem..."
                    onChange={e => setMensagem(e.target.value)} value={mensagem} />
                <InputGroup.Append>
                    <Button variant="primary" type="submit" disabled={!mensagem}>Enviar</Button>
                </InputGroup.Append>
            </InputGroup>
        </Form>
    )
}

export default EnviarMensagemForm;