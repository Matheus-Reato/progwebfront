import styles from '../module/Header.module.css'
import {Link} from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'

function Header(){
    return(
        <nav className={styles.navbar}>
            <h1>Loja de jogos</h1>
            <div className={styles.destinos}>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                        <Link to="/biblioteca">Biblioteca</Link>
                        </li>
                        <li className={styles.item}>
                        <Link to="/todosClientes">Clientes</Link>
                        </li>
                        <li className={styles.item}>
                        <Dropdown data-bs-theme="dark" >
                            <Dropdown.Toggle className={styles.botaoCadastro} id="dropdown-button-dark" variant="dark" style={{ background: 'transparent', border: 'none', fontSize:'25px'}}>
                                Cadastros
                            </Dropdown.Toggle>
                            <Dropdown.Menu style={{backgroundColor: "#333"}} >
                                <Dropdown.Item className={styles.link} href="/cliente" style={{color:"white"}}>
                                    Cadastro de Cliente
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item className={styles.link} href="/produto" style={{color:"white"}}>
                                    Cadastro de produtos
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        </li>
                    </ul>
        </div>

        </nav>
    )
}

export default Header