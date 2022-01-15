import { Link } from 'react-router-dom';

import './styles.css';

const ButtonCatalog = () => {
  return (
    <div className="button-container">
      <Link to="/products">
        <button className="btn-explore">
          <h6>ver catálogo</h6>
        </button>
      </Link>
      <p>Comece agora a navegar</p>
    </div>
  );
};

export default ButtonCatalog;
