import './styles.css';
import CarImage from '../../assets/images/car.png';
import ButtonCatalog from '../../components/ButtonCatalog';
import { Link } from 'react-router-dom';

const Home = () => {
   return (
      <div className="home-container">
         <div className="home-container-top">
            <div className="home-container-top-content">
               <h4>O carro perfeito para você</h4>
               <p>
                  Conheça nossos carros e dê mais um passo na realização do seu
                  sonho
               </p>
            </div>
            <div className="home-container-top-image">
               <img src={CarImage} alt="" />
            </div>
         </div>
         <div className="home-container-bottom">
            <Link to="/products">
               <ButtonCatalog />
            </Link>
         </div>
      </div>
   );
};

export default Home;
