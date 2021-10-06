import 'bootstrap/js/src/collapse.js';

function Navbar() {
   return (
      <nav className='navbar-container'>
         <div>
            <a href='link'>
               <h4>Carros Top</h4>
            </a>

            <button type='button'>
               <span></span>
            </button>
            <div>
               <ul>
                  <li>
                     <a href='link'>HOME</a>
                  </li>
                  <li>
                     <a href='link'>CATÁLOGO</a>
                  </li>
                  <li>
                     <a href='link'>ADMIN</a>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );
}

export default Navbar;
