import React, { useState, useEffect } from 'react';
import styles from '../module/ProdutoDetalhado.module.css';

function ProdutoDetalhado() {
  const url = window.location.href;
  const segments = url.split('/');
  const id = segments[segments.length - 1];

  const [clientes, setClientes] = useState([]);
  const [idCliente, setIdCliente] = useState('');

  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const buscarRepositorios = async () => {
      const response = await fetch(`http://localhost:8080/produtos/${id}`);
      const data = await response.json();
      setRepositories(data);
    };
    buscarRepositorios();
  }, [id]);

  useEffect(() => {
    const buscarClientes = async () => {
      const response = await fetch('http://localhost:8080/clientes');
      const data = await response.json();
      setClientes(data);
    };
    buscarClientes();
  }, []);

  const handleCompraSubmit = async (event) => {
    event.preventDefault();

    const dadosCompra = {
      idCliente,
      idProduto: repositories.idProduto,
      dataPedido: new Date().toISOString(),
    };

    const meuObjeto = JSON.stringify(dadosCompra);
    console.log(meuObjeto);
    try {
      const response = await fetch('http://localhost:8080/pedidos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: meuObjeto,
      });

      if (response.ok) {
        console.log('Enviado');
        window.location.reload();
      } else {
        console.log('Erro');
      }
    } catch (error) {
      console.error('Erro ao enviar os dados do cliente:', error);
    }
  };

  return (
    <div className={styles.container}>
      <form className="row g-3" onSubmit={handleCompraSubmit}>
        <div className="col-12">
          <h1 className={styles.nomeJogo}>{repositories.nome}</h1>
        </div>

        <div className="col-12" style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={repositories.url_imagem} alt="imagemJogo"></img>
        </div>

        <div className="col-12">
          <h3 className={styles.preco}>R$ {repositories.preco}</h3>
        </div>

        <div className="col-12">
          <p className={styles.sinopse}>
            <b>SINOPSE:</b> {repositories.sinopse}
          </p>
        </div>

      <div className='border' style={{padding:' 0 20px', display:'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center'}}>
              
          <h5>
            Adicione ao carrinho: 
          </h5>

          <select value={idCliente} onChange={(e) => setIdCliente(e.target.value)}>  
          
         
            <option value="" disabled>Escolha um cliente</option>         
              {clientes.sort((a, b) => a.nome.localeCompare(b.nome)).map((cliente) => (
                            
                <option key={cliente.idCliente} value={cliente.idCliente}>
                  {cliente.nome}
                </option>
              ))}
          </select>

        <div className={styles.submit}>
          <button type="submit" className="btn btn-success">
            <i className="fa-solid fa-check"></i> Enviar
          </button>
        </div>
        </div>
      </form>
    </div>
  );
}

export default ProdutoDetalhado;
