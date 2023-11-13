import { useState } from 'react';
import { useEffect } from 'react';

import styles from '../module/ProdutoDetalhado.module.css';

function ProdutoDetalhado() {

    const url = window.location.href;
    const segments = url.split('/');
    const id = segments[segments.length - 1];

    const [repositories, setRepositories] = useState([])

    useEffect(()=>{
        const buscarRepositorios = async() => {
            const response = await fetch(`http://localhost:8080/produtos/${id}`)

            const data = await response.json()
            setRepositories(data)

            //const sequenciaisDia = data.programacaoList.map(item => item.sequencialDia);
        }
        buscarRepositorios()
    }, [id]) 

    const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Adicione um ouvinte de evento de rolagem para mostrar ou ocultar o botão
    window.addEventListener('scroll', handleScroll);
    return () => {
      // Remova o ouvinte de evento ao desmontar o componente
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

        return (
            <div className={styles.container}>
                <form className='row g-3'>
                    <div className='col-12'>
                        <h1 className={styles.nomeRoteiro}>{repositories.nome}</h1>
                    </div>

                    <div className='col-12' style={{display:'flex', justifyContent:'center'}}>
                        <img src={repositories.url_imagem} alt='imagemRoteiro'></img>
                    </div>                  
             
                    <div className='col-12'>
                        <h3 className={styles.atracoes}>R$ {repositories.preco}</h3>
                    </div>
                    
                    <div className="col-12">
                        <p className={styles.descricao}><b>SINOPSE:</b> {repositories.sinopse}</p>
                    </div>
                   
                </form>
                <div>
                {showButton && (
                    <button id="back-to-top" className={styles.backToTop} onClick={scrollToTop}>
                    ↑
                    </button>
                )}
                </div>
            </div>
        );
    }


export default ProdutoDetalhado;