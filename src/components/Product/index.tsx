import CarImage from 'assets/images/car-card.png';

import './styles.css';

const Product = () => {
  return (
    <div className="product-container">
      <div className="product-container-top">
        <img src={CarImage} alt="car" />
      </div>
      <div className="product-container-bottom">
        <h3>Audi Supra TT</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          nisi
        </p>
        <div className="btn-container">
          <button className="btn-buy">
            <h6>COMPRAR</h6>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
