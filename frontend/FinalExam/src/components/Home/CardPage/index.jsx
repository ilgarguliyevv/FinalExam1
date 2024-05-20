import React from 'react'
import "./cardPage.scss"

const CardPage = () => {
  return (
    <div>
      <div className="card-hero">
        <div className="card-word">
          <h4>POPULAR PRODUCTS</h4>
          <h1>Our Products</h1>
          <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.</h5>
        </div>
      </div>
      <div className="card">
        <div className="card-box">
          <div className="card-div">
            <img src="https://preview.colorlib.com/theme/selling/images/model_1_bg.jpg.webp" alt="" />
            <h3>Wild West Hoodie</h3>
            <div className="card-rating">
              <p>5.0</p>
              <p>29</p>
            </div>
            <p className='card-lorem'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            <button className='card-button'>Cart</button>
            <button className='view-button'>View</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardPage
