import './styles.css';
import CarImage from '../../assets/images/car.png';
import ButtonCatalog from '../../components/ButtonCatalog';

const Home = () => {
   return (
      <div className="home">
         <div className="home-container">
            <div className="presentation-card">
               <div className="presentation-card-content">
                  <h4>O carro perfeito para você</h4>
                  <p>
                     Conheça nossos carros e dê mais um passo na realização do
                     seu sonho
                  </p>
               </div>
               <div className="presentation-card-image">
                  <img src={CarImage} alt="" />
               </div>
            </div>
            <div className="explorer-card">
               <ButtonCatalog />
            </div>
         </div>
      </div>
   );
};

export default Home;
