import { combineReducers } from "redux";

import {
    getAllProducts,
    addNewProduct
} from './productReducers'

export const rootReducer = combineReducers({ getAllProducts, addNewProduct });