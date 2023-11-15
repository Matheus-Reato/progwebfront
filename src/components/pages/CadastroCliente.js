import React from 'react';
import { useState } from 'react';
import styles from '../module/CadastroCliente.module.css';

function CadastroCliente(){

    const [cliente, setCliente] = useState({
        nome: '',
        email: '',
        telefone: '',
        dataNascimento:'',
      });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCliente({ ...cliente, [name]: value });
      };      

      const handleSubmit = async (e) => {
        e.preventDefault();

        try {
          const response = await fetch('http://localhost:8080/clientes', {
            method: 'POST', // ou 'PUT' se for uma atualização
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(cliente),
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
                <h1 className={styles.nomeRoteiro}>Cadastro de Cliente</h1>
            </div>

            <form className='row g-3 border' style={{paddingTop:'20px'}} onSubmit={handleSubmit}>

                <div className='col-md-12'>
                    <label className='form-label'>Nome:</label>
                    <input
                        type='text'
                        className='form-control'
                        name='nome'
                        value={cliente.nome}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className='col-md-12'>
                    <label className='form-label'>Email:</label>
                    <input
                        type='text'
                        className='form-control'
                        name='email'
                        value={cliente.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className='col-12' style={{paddingTop:'15px'}}>
                    <label className='form-label'>Telefone:</label>
                    <input
                        type='text'
                        className='form-control'
                        name='telefone'
                        value={cliente.telefone}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className='col-12' style={{paddingTop:'15px'}}>
                    <label className='form-label'>Data de nascimento:</label>
                    <input
                        type='date'
                        className='form-control'
                        name='dataNascimento'
                        value={cliente.dataNascimento}
                        onChange={handleChange}
                        required
                    />
                </div>            

                <div className={styles.submit}>
                    <button type="submit" className="btn btn-success"><i className="fa-solid fa-check"></i> Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default CadastroCliente;