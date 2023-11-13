import { useNavigate  } from 'react-router-dom';
import { useEffect } from 'react';

function Home () {
    const navigate  = useNavigate();

    useEffect(() => {
        // Lógica de redirecionamento
        const deveRedirecionar = true;
    
        if (deveRedirecionar) {
          navigate('/biblioteca'); // Chamando navigate dentro de useEffect
        }
      }, []);
    
}
export default Home;