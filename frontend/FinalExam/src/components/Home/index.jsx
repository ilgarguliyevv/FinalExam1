import React from 'react'
import "./home.scss"
import CardPage from './CardPage'

const Home = () => {
    return (
        <div>
            <div className="hero">
                <div className="shop">
                    <h1 className='hero-word'>SHOP With Us</h1>
                    <h4 className='hero-word-lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.</h4>
                    <button className='shop-button'>SHOP NOW</button>
                    <button className='club-button'>CLUB MEMBERSHIP</button>
                </div>
            </div>
            <CardPage />
        </div>
    )
}

export default Home
