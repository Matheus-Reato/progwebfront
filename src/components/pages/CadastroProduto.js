import React from 'react';
import { useState } from 'react';
import styles from '../module/CadastroProduto.module.css';

function CadastroProduto(){

    const [produto, setProduto] = useState({
        nome: '',
        preco: '',
        url_imagem: '',
        sinopse:''
      });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduto({ ...produto, [name]: value });
      };      

      const handleSubmit = async (e) => {
        e.preventDefault();

        try {
          const response = await fetch('http://localhost:8080/produtos', {
            method: 'POST', // ou 'PUT' se for uma atualização
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(produto),
          });
    
          if (response.ok) {
            console.log("Enviado")
            window.location.reload();          
          } else {
            console.log("Erro")           
          }
        } catch (error) {
          console.error('Erro ao enviar os dados do cliente:', error);
        }
      };

    return(
        <div className={styles.container}>
            <div>
                <h1 className={styles.nomeProduto}>Cadastro de Produto</h1>
            </div>

            <form className='row g-3 border' style={{paddingTop:'20px'}} onSubmit={handleSubmit}>

                <div className='col-md-12'>
                    <label className='form-label'>Nome:</label>
                    <input
                        type='text'
                        className='form-control'
                        name='nome'
                        value={produto.nome}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className='col-md-12'>
                    <label className='form-label'>Preço:</label>
                    <input
                        type='text'
                        className='form-control'
                        name='preco'
                        value={produto.preco}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className='col-12' style={{paddingTop:'15px'}}>
                    <label className='form-label'>Imagem:</label>
                    <input
                        type='text'
                        className='form-control'
                        name='url_imagem'
                        value={produto.url_imagem}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className='col-12' style={{paddingTop:'15px'}}>
                    <label className='form-label'>Sinopse:</label>
                    <textarea
                        className='form-control'
                        aria-label='With textarea'
                        name='sinopse'
                        value={produto.sinopse}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>            

                <div className={styles.submit}>
                    <button type="submit" className="btn btn-success"><i className="fa-solid fa-check"></i> Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default CadastroProduto;