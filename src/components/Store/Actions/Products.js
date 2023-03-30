import axios from "axios"


const Products = ()=>{
    
    return async (dispatch)=>{

        const response = await axios.get("https://fakestoreapi.com/products")
        const data =  response.data
        dispatch({
            type: "GET_PRODUCT",
            payload: data,
        })
    }
}


const AddProduct = (prod)=>{
    return (dispatch)=>{
        dispatch({
            type: "ADD_PRODUCT",
            payload : prod,
        })
    }
}


const removeProduct = (prod) =>{
    return (dispatch)=>{
        dispatch({
            type: "REMOVE_PRODUCT",
            payload: prod
        })
    }
}

export {Products,AddProduct,removeProduct}