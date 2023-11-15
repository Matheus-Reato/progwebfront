import CardCliente from '../Card/CardCliente';
import { useState } from 'react';
import { useEffect } from 'react';

import styles from '../module/ViewClientes.module.css';

function ViewClientes() {

    const [repositories, setRepositories] = useState([])

    useEffect(()=>{
        const buscarRepositorios = async() => {
            const response = await fetch('http://localhost:8080/clientes')

            const data = await response.json()
            setRepositories(data)
        }
        buscarRepositorios()
    }, [])    

        return (
            <section className={styles.roteiro}>

                <h1 className='text-center' style={{color:'black'}}>Clientes</h1>          

                    {
                        repositories.length > 0 ? (
                            <section className={styles.lista}>
                                {
                                    repositories.map((repo) =>(
                                        <CardCliente
                                            key={repo.idCliente} 
                                            name={repo.nome} 
                                            email={repo.email}
                                            telefone={repo.telefone}
                                            dataNascimento={repo.dataNascimento}
                                            identificador={repo.idCliente}
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


export default ViewClientes;