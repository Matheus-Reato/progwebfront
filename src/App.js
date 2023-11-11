import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/pages/Header';
import CadastroCliente from './components/pages/CadastroCliente';
import CadastroProduto from './components/pages/CadastroProduto';
import ViewClientes from './components/pages/ViewClientes';
import Footer from './components/pages/Footer';
import ViewProdutos from './components/pages/ViewProdutos';


function App() {

  return (
    <div>

    <Router>

      <Header></Header>

            <Routes>                 
                  <Route path="/biblioteca" element={<ViewProdutos />}/>
                  <Route path="/todosClientes" element={<ViewClientes />}/>
                  <Route path="/cliente" element={<CadastroCliente />}/>  
                  <Route path="/produto" element={<CadastroProduto />}/>               
            </Routes>           
          
      
    </Router>

    </div>
  );
}

export default App;