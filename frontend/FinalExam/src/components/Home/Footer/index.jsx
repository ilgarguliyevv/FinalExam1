import React from "react";
import "./footer.scss";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-section">
        <div className="footer-about">
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            facere laudantium magnam voluptatum autem. Amet aliquid nesciunt
            veritatis aliquam.
          </p>
        </div>
        <div className="footer-quick">
          <h1>QUICK LINKS</h1>
          <a href="">About Us</a>
          <a href="">Services</a>
          <a href="">Testimonials</a>
          <a href="">Contact Us</a>
        </div>
        <div className="footer-follow">
          <h1>FOLLOW US</h1>
          <div className="footer-icons">
            <i>
              <FacebookOutlinedIcon />
            </i>
            <i>
              <TwitterIcon />
            </i>
            <i>
              <LinkedInIcon />
            </i>
            <i>
              <InstagramIcon />
            </i>
          </div>
        </div>
        <div className="footer-product">
          <h1>FEATURED PRODUCT</h1>
          <img
            src="https://preview.colorlib.com/theme/selling/images/product_1_bg.jpg"
            alt=""
          />
          <h3>Leather Brown Shoe</h3>
          <p>$60.00</p>
          <button>ADD TO CART</button>
        </div>
      </div>
      <h5 className="footer-finis">
        Copyright ©2024 All rights reserved | This template is made with by
        Colorlib
      </h5>
    </div>
  );
};

export default Footer;
