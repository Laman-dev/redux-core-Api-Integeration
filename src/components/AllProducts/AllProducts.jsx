import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddProduct, Products } from '../Store/Actions/Products'
import "../Css/AllProducts.css"

function AllProducts() {

    useEffect(() => {
      dispatch(Products())
    }, [])
    
    const dispatch = useDispatch()
    const data = useSelector(state=>state.ProductsReducers.data)
    console.log(data);
    const cartProducts = useSelector(state=>state.AddProductsReducers.cartProducts)
    console.log(cartProducts);


    const cartHandler = (prod)=>{
      let itemsId = cartProducts.map((item)=>item.id);
      if(itemsId.includes(prod.id)){
        alert("Already Added Product")
      }else{
        dispatch(AddProduct(prod))
      }
      
    }

  return (
    
    <>

<div className="container">
    <h3 className="h3"><u>feature product</u> </h3>
    <div className="row">
    {
        data ? data.map((prod)=>
        
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
                
                <button className="add-to-cart" href="" onClick={()=>{cartHandler(prod)}}>{
                  cartProducts.map((item)=> item.id).includes(prod.id) ? "Product Added" : "Add to Cart"}</button>
            </div>
        </div>
    </div>
    
        )
        :
        <h1>Loading......</h1>

       }
  
    </div>
</div>
    
    </>
  )
}

export default AllProducts