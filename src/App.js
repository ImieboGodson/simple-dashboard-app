import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { getProducts } from './common/actions/productActions';
import { FaTimes } from "react-icons/fa";
import Form from './components/Form/Form';
import TableDisplay from './components/TableDisplay/TableDisplay';
import Topbar from './components/Topbar/Topbar';

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(getProducts())
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.getAllProducts.products,
    errorMessage: state.getAllProducts.errorMessage
  }
}

function App({ fetchProducts, products, errorMessage }) {

  const [isOpened, setIsOpened] = useState(true);

  useEffect(() => {
    fetchProducts()
  }, []);
  

  const handleAddProductView = () => {
    setIsOpened(!isOpened);
  }

  return (
    <div className="app">
      <section className={`left-section ${isOpened ? '' : 'noDisplay'}`}>
        <span onClick={() => handleAddProductView()} className={`close-btn ${isOpened ? '' : 'noDisplay'}`}><FaTimes className='close-icon'/></span>
        <Form onAddNewProduct={handleAddProductView}/>
      </section>
      <section className='right-section'>
        <Topbar onAddNewProduct={handleAddProductView} isOpened={isOpened}/>
        <main className='main-section'>
          <TableDisplay products={products}/>
        </main>
      </section>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
