import React from "react";
import "./Leadership.scss";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import Twitter from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Ourservices from "../Ourservices";
const Leadership = () => {
  return (
    <div className="leader-hero">
      <div className="leader-title">
        <p>T E A M</p>
        <h1>Leadership</h1>
      </div>
      <div className="leader-cards">
        <div className="cards-one">
          <img
            src="https://preview.colorlib.com/theme/selling/images/person_2.jpg"
            alt=""
          />
          <h4 className="cards-one-word">John Rooster</h4>
          <h6>CO-FOUNDER, PRESIDENT</h6>
          <p>
            Nisi at consequatur unde molestiae quidem provident voluptatum
            deleniti quo iste error eos est praesentium distinctio cupiditate
            tempore suscipit inventore deserunt tenetur.
          </p>
          <div className="cards-one-icon">
            <i>
              <FacebookOutlinedIcon />
            </i>
            <i>
              <Twitter />
            </i>
            <i>
              <LinkedInIcon />
            </i>
            <i>
              <InstagramIcon />
            </i>
          </div>
        </div>
        <div className="cards-one">
          <img
            src="https://preview.colorlib.com/theme/selling/images/person_3.jpg"
            alt=""
          />
          <h4 className="cards-one-word">Tom Sharp</h4>
          <h6>CO-FOUNDER, COO</h6>
          <p>
            Nisi at consequatur unde molestiae quidem provident voluptatum
            deleniti quo iste error eos est praesentium distinctio cupiditate
            tempore suscipit inventore deserunt tenetur.
          </p>
          <div className="cards-one-icon">
            <i>
              <FacebookOutlinedIcon />
            </i>
            <i>
              <Twitter />
            </i>
            <i>
              <LinkedInIcon />
            </i>
            <i>
              <InstagramIcon />
            </i>
          </div>
        </div>{" "}
        <div className="cards-one">
          <img
            src="https://preview.colorlib.com/theme/selling/images/person_4.jpg"
            alt=""
          />
          <h4 className="cards-one-word">Winston Hodson</h4>
          <h6>MARKETING</h6>
          <p>
            Nisi at consequatur unde molestiae quidem provident voluptatum
            deleniti quo iste error eos est praesentium distinctio cupiditate
            tempore suscipit inventore deserunt tenetur.
          </p>
          <div className="cards-one-icon">
            <i>
              <FacebookOutlinedIcon />
            </i>
            <i>
              <Twitter />
            </i>
            <i>
              <LinkedInIcon />
            </i>
            <i>
              <InstagramIcon />
            </i>
          </div>
        </div>
      </div>
      <Ourservices />
    </div>
  );
};

export default Leadership;
