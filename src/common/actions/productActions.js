import { 
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILED,
    FETCH_PRODUCTS_PENDING,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAILED,
    ADD_PRODUCT_PENDING
} from "../constants";


export const getProducts = () => {

    return (dispatch) => {
        dispatch({type: FETCH_PRODUCTS_PENDING});
        fetch('https://hidden-castle-11731.herokuapp.com/api/products')
          .then(res => res.json())
          .then(data => dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: data }))
          .catch(error => dispatch({ type: FETCH_PRODUCTS_FAILED, payload: 'Ooops Something Broke!' }))
    }

} 

