import React from 'react'
import { Link } from 'react-router-dom'
import "../Css/Home.css"

function Home() {
  return (
    <>
    <div className="home-container">
        <div className="home-content">
            <h2><u>It's time to Fashion</u></h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde suscipit quis incidunt rem magni. Neque ex corrupti aliquid odio eos.</p>
            <Link to="AllProducts"><button>Visit Product</button></Link>
        </div>
    </div>

    <div className="social">
    <i class="fa fa-facebook"></i>
    <i class="fa fa-instagram"></i>
    <i class="fa fa-twitter"></i>
    </div>


    </>
  )
}

export default Home