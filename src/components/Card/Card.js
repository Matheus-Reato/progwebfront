import styles from '../module/Card.module.css'
import {BsArrowRight} from 'react-icons/bs'
import { useNavigate  } from 'react-router-dom';

function deleteRoteiro(identificador){


  fetch(`http://localhost:8080/produtos/${identificador}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',   
    },
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`Erro ao excluir item: ${response.status}`);
    }
    console.log('Item excluído com sucesso.');
    window.location.reload();
  })
  .catch(error => {
    console.error('Erro ao excluir item:', error);
  });
    
}

// eslint-disable-next-line react/prop-types
function Card({name, preco, url_imagem, sinopse, identificador}){

    const navigate  = useNavigate();

    const handleRedirecionar = (key) => {
        navigate(`/biblioteca/${identificador}`);
    };

    const handleEdicao = (key) => {
        navigate(`/produtos/${identificador}`);
    };

    return(
        <section className={styles.card}>
                
                <img  className={styles.imagemViagem} src={url_imagem} alt="imagem-produto"></img>
                
            <h3>{name}</h3>
            <p>R${preco}</p>

            <div className={styles.card_footer}>
                <button className='btn btn-secondary' onClick={() => handleEdicao(identificador)} style={{marginRight:'10px'}}><i className="fa-solid fa-pen-to-square"></i></button>
                <button className='btn btn-danger' id="excluirButton" data-id={identificador} onClick={() => deleteRoteiro(identificador)}><i className="fa-solid fa-trash"></i></button>            
                <button className={styles.botao} onClick={() => handleRedirecionar(identificador)}><BsArrowRight/></button>
            </div>   

        </section>
    )
}
export default Card