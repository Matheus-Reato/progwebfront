import React, { Component } from 'react';
import styles from '../module/UpdateProdutos.module.css';

class UpdateProdutos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meuObjeto: {
        nome: '',
        preco: '',
        url_imagem: '',
        sinopse: ''
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
      const response = await fetch(`http://localhost:8080/produtos/${id}`);
      const data = await response.json();

      this.setState({
          meuObjeto: {
            nome: data.nome,
            preco: data.preco,
            url_imagem: data.url_imagem,
            sinopse: data.sinopse,
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
  
    //const meuObjetoJSON = JSON.stringify(this.state.meuObjeto);

  
    fetch(`http://localhost:8080/produtos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json', // Indica que você está enviando dados no formato JSON
        // Adicione cabeçalhos adicionais conforme necessário
      },
      body: JSON.stringify(this.state.meuObjeto) // Converte o objeto em uma string JSON
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Erro ao realizar a requisição: ${response.status}`);
        }
        return response.json(); // Se você espera uma resposta JSON
      })
      .then(data => {
        // Lida com a resposta do servidor (se houver)
        console.log('Requisição PUT bem-sucedida:', data);
        window.history.back();
      })
      .catch(error => {
        console.error('Erro durante a requisição PUT:', error);
      });
    };

  render() {

    return(
        <div className={styles.container}>
        <div className="border border-dark, col-12" style={{boxShadow:'0px 4px 6px rgba(0, 0, 0, 0.1)'}}>
        <h2 className='text-center' style={{paddingTop:'10px'}}>Atualize um produto</h2>
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
            <label className='form-label'>Preço:</label>
            <input
              type='text'
              value={this.state.meuObjeto.preco}
              onChange={this.changeHandler}
              className='form-control'
              name='preco'
              required
            />
          </div>

          <div className='col-12' style={{paddingTop:'15px'}}>
            <label className='form-label'>Imagem:</label>
            <input
              type='text'
              value={this.state.meuObjeto.url_imagem}
              onChange={this.changeHandler}
              className='form-control'
              name='url_imagem'
              required
            />
          </div>

          <div className='col-12' style={{paddingTop:'15px'}}>
            <label className='form-label'>Sinopse:</label>
            <textarea
              className='form-control'
              value={this.state.meuObjeto.sinopse}
              onChange={this.changeHandler}
              aria-label='With textarea'
              name='sinopse'
              required
            ></textarea>
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
export default UpdateProdutos