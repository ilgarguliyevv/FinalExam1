import React from "react";
import "./Ourservices.scss";
import PieChartIcon from "@mui/icons-material/PieChart";
import BackspaceIcon from "@mui/icons-material/Backspace";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import Footer from "../Footer";
const Ourservices = () => {
  return (
    <div className="our-services">
      <div className="services">
        <p>OUR SERVICES</p>
        <h1>We Offer Services</h1>
      </div>
      <div className="services-card">
        <div className="services-one">
          <div className="services-icon">
            <i>
              <PieChartIcon />
            </i>
          </div>
          <div className="services-one-word">
            <h1>Business Consulting</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quis molestiae vitae eligendi at.
            </p>
            <a href="">Learn More</a>
          </div>
        </div>
        <div className="services-one">
          <div className="services-icon">
            <i>
              <BackspaceIcon />
            </i>
          </div>
          <div className="services-one-word">
            <h1>Market Analysis</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quis molestiae vitae eligendi at.
            </p>
            <a href="">Learn More</a>
          </div>
        </div>
        <div className="services-one">
          <div className="services-icon">
            <i>
              <AvTimerIcon />
            </i>
          </div>
          <div className="services-one-word">
            <h1>User Monitoring</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quis molestiae vitae eligendi at.
            </p>
            <a href="">Learn More</a>
          </div>
        </div>
        <div className="services-one">
          <div className="services-icon">
            <i>
              <BeenhereIcon />
            </i>
          </div>
          <div className="services-one-word">
            <h1>Seller Consulting</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quis molestiae vitae eligendi at.
            </p>
            <a href="">Learn More</a>
          </div>
        </div>
        <div className="services-one">
          <div className="services-icon">
            <i>
              <BusinessCenterIcon />
            </i>
          </div>
          <div className="services-one-word">
            <h1>Financial Investment</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quis molestiae vitae eligendi at.
            </p>
            <a href="">Learn More</a>
          </div>
        </div>
        <div className="services-one">
          <div className="services-icon">
            <i>
              <CloudDoneIcon />
            </i>
          </div>
          <div className="services-one-word">
            <h1>Financial Management</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quis molestiae vitae eligendi at.
            </p>
            <a href="">Learn More</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Ourservices;
