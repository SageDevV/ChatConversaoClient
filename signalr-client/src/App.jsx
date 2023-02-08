import { useState } from 'react';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import SalaDeEspera from './components/SalaDeEspera';
import ChatDeConversacao from './components/ChatDeConversacao';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  const [conexao, setConexao] = useState();
  const [mensagens, setMensagens] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  const entraNaSala = async (usuario, sala) => {
    try {
      const conexao = new HubConnectionBuilder()
        .withUrl("https://localhost:7123/chat")
        .configureLogging(LogLevel.Information)
        .build();

      conexao.on("RecebendoMensagem", (usuario, mensagem) => {
        setMensagens(mensagens => [...mensagens, { usuario, mensagem }]);
      });

      conexao.on("UsuariosNaSala", (usuarios) => {
        setUsuarios(usuarios);
      });

      conexao.onclose(e => {
        setConexao();
        setMensagens([]);
        setUsuarios([]);
      });

      await conexao.start();
      await conexao.invoke("EntrarNaSala", { usuario, sala });
      setConexao(conexao);
    } catch (e) {
      console.log(e);
    }
  }

  const enviarMensagem = async (mensagem) => {
    try {
      await conexao.invoke("EnviarMensagem", mensagem);
    } catch (e) {
      console.log(e);
    }
  }

  const fecharConexao = async () => {
    try {
      await conexao.stop();
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className='app'>
      <h2>Chat de conversação</h2>
      <hr className='line' />
      {!conexao
        ? <SalaDeEspera entrarNaSala={entraNaSala} />
        : <ChatDeConversacao enviarMensagem={enviarMensagem} mensagens={mensagens} usuarios={usuarios} fecharConexao={fecharConexao} />}
    </div>
  )

}

export default App;
