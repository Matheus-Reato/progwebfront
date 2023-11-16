import Card from '../Card/Card';
import { useState } from 'react';
import { useEffect } from 'react';

import styles from '../module/ViewProdutos.module.css';

function ViewProdutos() {

    const [repositories, setRepositories] = useState([])

    useEffect(()=>{
        const buscarRepositorios = async() => {
            const response = await fetch('http://localhost:8080/produtos')

            const data = await response.json()
            setRepositories(data)
        }
        buscarRepositorios()
    }, []) 


        return (
            <section className={styles.jogos}>

                <h1 className='text-center' style={{color:'black'}} >Jogos</h1>          

                    {
                        repositories.length > 0 ? (
                            <section className={styles.lista}>
                                {
                                    repositories.map((repo) =>(
                                        <Card 
                                            key={repo.idProduto} 
                                            name={repo.nome}                                        
                                            preco={repo.preco}
                                            url_imagem={repo.url_imagem}
                                            sinopse={repo.sinopse}
                                            identificador={repo.idProduto}
                                        />
                                    ))
                                }
                            </section>
                        ) : (
                            <p></p>
                        )
                    }
            </section>
           
        );
    }


export default ViewProdutos;