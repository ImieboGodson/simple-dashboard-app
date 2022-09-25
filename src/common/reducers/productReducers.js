import { 
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILED,
    FETCH_PRODUCTS_PENDING,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAILED,
    ADD_PRODUCT_PENDING
} from "../constants";

const initialProductsState = {
    products: [],
    isPending: false,
    error: false,
    errorMessage: ''
}


export const getAllProducts = (state=initialProductsState, action={}) => {
    switch(action.type) {
        case FETCH_PRODUCTS_PENDING:
            return Object.assign({}, state, { isPending: true, error: false, errorMessage: '' });
        case FETCH_PRODUCTS_SUCCESS:
            return Object.assign({}, state, { isPending: false, error: false, errorMessage: '', products: action.payload });
        case FETCH_PRODUCTS_FAILED:
            return Object.assign({}, state, { isPending: false, error: true, errorMessage: action.payload });
        default:
            return state;
    }
}

const initialProductState = {
    product: {},
    isPending: false,
    error: false,
    errorMessage: ''
}

export const addNewProduct = (state=initialProductState, action={}) => {
    switch(action.type) {
        case ADD_PRODUCT_PENDING:
            return Object.assign({}, state, { isPending: true, error: false, errorMessage: '' });
        case ADD_PRODUCT_SUCCESS:
            return Object.assign({}, state, { product: action.payload, isPending: false, error: false, errorMessage: '' });
        case ADD_PRODUCT_FAILED:
            return Object.assign({}, state, { isPending: false, error: true, errorMessage: action.payload });
        default:
            return state;
    }
}