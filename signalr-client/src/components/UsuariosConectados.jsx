const usuariosConectados = ({ usuarios }) => {
    return (
        <div className='user-list'>
            <h4>Usuários conectados</h4>
            {usuarios.map((usuario, indice) => <h6 key={indice}>{usuario}</h6>)}
        </div>
    )
}

export default usuariosConectados;