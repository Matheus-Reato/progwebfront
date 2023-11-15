import styles from '../module/CardCliente.module.css'
import {BsArrowRight} from 'react-icons/bs'
import { useNavigate  } from 'react-router-dom';

function deleteRoteiro(identificador){


  fetch(`http://localhost:8080/clientes/${identificador}`, {
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
function CardCliente({name, email, telefone, dataNascimento, identificador}){

    const navigate  = useNavigate();

    const handleEdicao = (key) => {
        navigate(`/clientes/${identificador}`);
    };

    return(
        <section className={styles.card}>                            
            <h3>{name}</h3>
            <h4>{telefone}</h4>
            <p>{email}</p>
            <p>{dataNascimento}</p>


            <div className={styles.card_footer}>
                <button className='btn btn-secondary' onClick={() => handleEdicao(identificador)} style={{marginRight:'10px'}}><i className="fa-solid fa-pen-to-square"></i></button>
                <button className='btn btn-danger' id="excluirButton" data-id={identificador} onClick={() => deleteRoteiro(identificador)}><i className="fa-solid fa-trash"></i></button>            
            </div>   

        </section>
    )
}
export default CardCliente