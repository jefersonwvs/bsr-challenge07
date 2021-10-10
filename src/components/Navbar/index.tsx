import './styles.css';
import 'bootstrap/js/src/collapse.js';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
   return (
      <nav className="navbar navbar-expand-md navbar-light bg-primary navbar-container">
         <div className="container-fluid">
            {/* Logo */}
            <Link to="/" className="navbar-logo-text">
               <h4>Carros Top</h4>
            </Link>

            <button
               className="navbar-toggler"
               type="button"
               data-bs-toggle="collapse"
               data-bs-target="#carrostop-navbar"
               aria-controls="carrostop-navbar"
               aria-expanded="false"
               aria-label="Toggle navigation"
            >
               <span className="navbar-toggler-icon"></span>
            </button>

            {/* Menu items */}
            <div className="collapse navbar-collapse" id="carrostop-navbar">
               <ul className="navbar-nav offset-md-2 navbar-menu">
                  <li>
                     <NavLink to="/" activeClassName="active" exact>
                        Home
                     </NavLink>
                  </li>
                  <li>
                     <NavLink to="/products" activeClassName="active">Catálogo</NavLink>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );
}

export default Navbar;
