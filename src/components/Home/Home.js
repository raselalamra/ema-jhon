import React from "react";
import logo from "../../images/t-shirt.png";
import "./Home.css";
const Home = () => {
  return (
    <div className="home-container">
      <div className="sell-container">
        <p>
          <small className="sale">Sale up to 70% off</small>
        </p>
        <h1>New Collection For Fall</h1>
        <p>Discover all the new arrivals of ready-to-wear collection.</p>
        <button className="btn-shop">SHOP NOW</button>
      </div>

      <img src={logo} alt="" />
    </div>
  );
};

export default Home;
