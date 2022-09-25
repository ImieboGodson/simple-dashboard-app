import { useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { getProducts } from './common/actions/productActions';
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

  useEffect(() => {
    fetchProducts()
  }, []);
  

  return (
    <div className="app">
      <section className='left-section'>
        <Form />
      </section>
      <section className='right-section'>
        <Topbar />
        <main className='main-section'>
          <TableDisplay products={products}/>
        </main>
      </section>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
