import { useEffect, useRef } from 'react';

const ContainerMensagem = ({ mensagens }) => {
    const messageRef = useRef();

    useEffect(() => {
        if (messageRef && messageRef.current) {
            const { scrollHeight, clientHeight } = messageRef.current;
            messageRef.current.scrollTo({ left: 0, top: scrollHeight - clientHeight, behavior: 'smooth' });
        }
    }, [mensagens]);

    return (
        <div ref={messageRef} className='message-container' >
            {mensagens.map((composicaoMensagem, indice) =>
                <div key={indice} className='user-message'>
                    <div className='message bg-primary'>{composicaoMensagem.mensagem}</div>
                    <div className='from-user'>{composicaoMensagem.usuario}</div>
                </div>
            )}
        </div>
    )
}

export default ContainerMensagem;