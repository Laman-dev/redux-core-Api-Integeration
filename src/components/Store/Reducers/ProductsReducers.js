
const INITIAL_STATE = {
    data: [],
    cartProducts : []
}

const ProductsReducers = (state = INITIAL_STATE, action)=>{
    switch (action.type){
        case "GET_PRODUCT":
            return {
                data: [...state.data, ...action.payload]
            }

        default : 
        return {
            ...state
        }
    }

}


const AddProductsReducers = (state = INITIAL_STATE, action)=>{
    switch (action.type){
        case "ADD_PRODUCT":
            return {
                cartProducts: [...state.cartProducts, action.payload]
            }

        case "REMOVE_PRODUCT": 
        const allProducts = state.cartProducts;
        const filteredProducts = allProducts.filter(
            (prod)=> prod.id !== action.payload.id
            );
            return {
                cartProducts : [...filteredProducts]
            }
            
        default : 
        return {
            ...state
        }
    }

}


export {ProductsReducers, AddProductsReducers}