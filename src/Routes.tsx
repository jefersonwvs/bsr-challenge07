import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

const Routes = () => {
   return (
      <BrowserRouter>
         <Navbar />
         <Home />
      </BrowserRouter>
   );
};

export default Routes;
