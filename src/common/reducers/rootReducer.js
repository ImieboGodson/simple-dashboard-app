import { combineReducers } from "redux";

import {
    getAllProducts
} from './productReducers'

export const rootReducer = combineReducers({ getAllProducts });