import './styles.css';
import Search from '../../components/Search';
import Product from '../../components/Product';

const Catalog = () => {
   return (
      <div className="catalog">
         <div className="catalog-container">
            <Search />
            <div className="my-4">
               <div className="row">
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4 product-card">
                     <Product />
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4 product-card">
                     <Product />
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4 product-card">
                     <Product />
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4 product-card">
                     <Product />
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4 product-card">
                     <Product />
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4 product-card">
                     <Product />
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4 product-card">
                     <Product />
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4 product-card">
                     <Product />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Catalog;
