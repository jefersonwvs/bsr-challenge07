import './styles.css';
import Search from '../../components/Search';
import Product from '../../components/Product';

const Catalog = () => {
   return (
      <div className="catalog-container">
         <Search />
         <div className="container my-4">
            <div className="row">
               <div className="col-sm-6 col-lg-4 col-xl-3">
                  <Product />
               </div>
               <div className="col-sm-6 col-lg-4 col-xl-3">
                  <Product />
               </div>
               <div className="col-sm-6 col-lg-4 col-xl-3">
                  <Product />
               </div>
               <div className="col-sm-6 col-lg-4 col-xl-3">
                  <Product />
               </div>
               <div className="col-sm-6 col-lg-4 col-xl-3">
                  <Product />
               </div>
               <div className="col-sm-6 col-lg-4 col-xl-3">
                  <Product />
               </div>
               <div className="col-sm-6 col-lg-4 col-xl-3">
                  <Product />
               </div>
               <div className="col-sm-6 col-lg-4 col-xl-3">
                  <Product />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Catalog;
