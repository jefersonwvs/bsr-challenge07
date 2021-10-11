import './styles.css';

const Search = () => {
   return (
      <div>
         <div className="search-box">
            <input
               className="input"
               type="search"
               placeholder="Digite sua busca"
            ></input>
            <div className="search-button">
               <button className="btn-search">
                  <h6>BUSCAR</h6>
               </button>
            </div>
         </div>
      </div>
   );
};

export default Search;
