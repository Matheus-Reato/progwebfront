import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/pages/Header';
import CadastroCliente from './components/pages/CadastroCliente';
import Home from './components/pages/Home';
import CadastroProduto from './components/pages/CadastroProduto';
import ProdutoDetalhado from './components/pages/ProdutoDetalhado';
import ViewClientes from './components/pages/ViewClientes';
import Footer from './components/pages/Footer';
import ViewProdutos from './components/pages/ViewProdutos';
import UpdateProdutos from './components/pages/UpdateProdutos';
import UpdateClientes from './components/pages/UpdateClientes';


function App() {

  return (
    <div>

    <Router>

      <Header></Header>

            <Routes>
                  <Route exact path="/" element={<Home />}/>               
                  <Route path="/biblioteca" element={<ViewProdutos />}/>
                  <Route path="/biblioteca/:id" element={<ProdutoDetalhado />}/>
                  <Route path="/todosClientes" element={<ViewClientes />}/>
                  <Route path="/clientes/:id" element={<UpdateClientes />}/>  
                  <Route path="/cliente" element={<CadastroCliente />}/>  
                  <Route path="/produto" element={<CadastroProduto />}/>  
                  <Route path="/produtos/:id" element= {< UpdateProdutos />}/>             
            </Routes>           
          
      
    </Router>

    </div>
  );
}

export default App;