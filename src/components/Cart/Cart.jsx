import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux'
import "../Css/AllProducts.css"
import { removeProduct } from '../Store/Actions/Products';

function Cart() {

    const dispatch = useDispatch() 
    const cartProducts = useSelector(state=>state.AddProductsReducers.cartProducts)
    console.log(cartProducts);

    const removeHandler = (prod) =>{

      dispatch(removeProduct(prod))

    }


  return (
    <>

<div className="container">
    <div className="row">
    <h3 className="h3"><u>Added Products</u> </h3>
    {
        cartProducts.length > 0 ? cartProducts.map((prod)=>
        
        <div className="col-md-3 col-sm-6" key={prod.id}>
        <div className="product-grid4">
          <div className=" box box1">
            <img src={prod.image} className=" my-3 card-img-top" alt="..."/>
          </div> 
            <div className="product-content">
                <h3 className="title"><a href="#"><b>{prod.category}</b></a></h3>
                <h3 className="title"><a href="#">{prod.title}</a></h3>
                <div className="price">
                    <span>$-{prod.price}</span>
                </div>
                
                <button className="add-to-cart" href="" onClick={()=>{removeHandler(prod)}} >Remove Product</button>
            </div>
        </div>
    </div>
    
        )
        :
        <>
        <div className="text text-center">
            <h1>Empty Cart !!</h1>
            <p>go to all-products and added Product</p>
            <Link to="/AllProducts">Click Here</Link>
        </div>
        
        </>

       }
  
    </div>
</div>


    </>
  )
}

export default Cart