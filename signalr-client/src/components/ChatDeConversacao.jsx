import ContainerMensagem from './ContainerMensagem.jsx';
import UsuariosConectados from './UsuariosConectados';
import EnviarMensagemForm from './EnviarMensagemForm';
import { Button } from 'react-bootstrap';


const ChatDeConversacao = ({ enviarMensagem, mensagens, usuarios, fecharConexao }) => <div>
    <div className='leave-room'>
        <Button variant='danger' onClick={() => fecharConexao()}>Sair da sala</Button>
    </div>
    <UsuariosConectados usuarios={usuarios} />
    <div className='chat'>
        <ContainerMensagem mensagens={mensagens} />
        <EnviarMensagemForm enviarMensagem={enviarMensagem} />
    </div>
</div>

export default ChatDeConversacao;