import { combineReducers } from "redux";
import { AddProductsReducers, ProductsReducers } from "./ProductsReducers";

const rootreducer = combineReducers({
    ProductsReducers: ProductsReducers,
    AddProductsReducers : AddProductsReducers
})

export {rootreducer}