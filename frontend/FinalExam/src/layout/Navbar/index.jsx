import React from 'react'
import "./Navbar.scss"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

const Navbar = () => {
    return (
        <div>
            {/* <div className="nav-hero container">
                <i><FacebookIcon /></i>
                <i><TwitterIcon /></i>
                <i><InstagramIcon /></i>
                <i><LinkedInIcon /></i>
                <div className="nav-contact">
                    <i><CallIcon /></i>
                    <div>(+1) 234 5678 9101</div>
                </div>
                <div className="nav-email">
                    <i><EmailIcon /></i>
                    <div>shop@yourdomain.com</div>
                </div>
            </div> */}
            <div className="nav container">
                <h1>Selling.</h1>
                <div className="honor">
                    <a href="">Home</a>
                    <a href="">Products</a>
                    <a href="">About Us</a>
                    <a href="">Special</a>
                    <a href="">Testimonials</a>
                    <a href="">Blog</a>
                    <a href="">Contact</a>
                </div>

            </div>
        </div>
    )
}

export default Navbar
Navbar