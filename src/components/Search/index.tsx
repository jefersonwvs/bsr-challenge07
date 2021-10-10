import './styles.css';

const Search = () => {
   return (
      <div className="search-container">
         <input className="input" type="text" placeholder="Digite sua busca"></input>
         <div className="search-button">
            <button className="btn-search">
               <h6>BUSCAR</h6>
            </button>
         </div>
      </div>
   );
};

export default Search;
