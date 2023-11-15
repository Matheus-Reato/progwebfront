import React, { Component } from 'react';
import styles from '../module/UpdateClientes.module.css';

class UpdateClientes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meuObjeto: {
        nome: '',
        email: '',
        telefone: '',
        dataNascimento: '',
        ultimaCompra: ''
      }
    };
  }

  componentDidMount() {
    const url = window.location.href;
    const segments = url.split('/');
    const id = segments[segments.length - 1];

    this.buscarRepositorios(id);
  }

  async buscarRepositorios(id) {
    try {
      const response = await fetch(`http://localhost:8080/clientes/${id}`);
      const data = await response.json();

      this.setState({
          meuObjeto: {
            nome: data.nome,
            email: data.email,
            telefone: data.telefone,
            dataNascimento: data.dataNascimento,
            ultimaCompra: data.ultimaCompra
          },
      });
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  }

  changeHandler = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      meuObjeto: {
        ...prevState.meuObjeto,
        [name]: value,
      },
    }));
  };

  handleSubmit = async (e) => {
    e.preventDefault();
  
    const url = window.location.href;
    const segments = url.split('/');
    const id = segments[segments.length - 1];
  
    const meuObjetoJSON = JSON.stringify(this.state.meuObjeto);

  
    try {
        const response = await fetch(`http://localhost:8080/clientes/${id}`, {
          method: 'PUT', // ou 'PUT' se for uma atualização
          headers: {
            'Content-Type': 'application/json',
          },
          body: meuObjetoJSON,
        });
  
        if (response.ok) {
          console.log("Enviado")
          window.history.back();      
        } else {
          console.log("Erro")           
        }
      } catch (error) {
        console.error('Erro ao enviar os dados do cliente:', error);
      }
    };

  render() {

    return(
        <div className={styles.container}>
        <div className="border border-dark, col-12" style={{boxShadow:'0px 4px 6px rgba(0, 0, 0, 0.1)'}}>
        <h2 className='text-center' style={{paddingTop:'10px'}}>Atualize um cliente</h2>
        <form className='row g-3' onSubmit={this.handleSubmit}>
          <div className='col-md-12'>
            <label className='form-label'>Nome:</label>
            <input
              type='text'
              value={this.state.meuObjeto.nome}
              onChange={this.changeHandler}
              className='form-control'
              name='nome'
              required
            />
          </div>

          <div className='col-md-12'>
            <label className='form-label'>Email:</label>
            <input
              type='text'
              value={this.state.meuObjeto.email}
              onChange={this.changeHandler}
              className='form-control'
              name='email'
              required
            />
          </div>

          <div className='col-12' style={{paddingTop:'15px'}}>
            <label className='form-label'>Telefone:</label>
            <input
              type='text'
              value={this.state.meuObjeto.telefone}
              onChange={this.changeHandler}
              className='form-control'
              name='telefone'
              required
            />
          </div>

          <div className='col-12' style={{paddingTop:'15px'}}>
            <label className='form-label'>Data de Nascimento:</label>
            <input
              type='date'
              value={this.state.meuObjeto.dataNascimento}
              onChange={this.changeHandler}
              className='form-control'
              name='dataNascimento'
              required
            />
          </div>
          
          <div className={styles.botao}>
            <button type="submit" className="btn btn-success" style={{marginTop:'15px', marginBottom:'15px'}} ><i className="fa-solid fa-check"></i> Enviar</button>
         </div>

          </form>
        

          </div>

          </div>
    )
}
}
export default UpdateClientes