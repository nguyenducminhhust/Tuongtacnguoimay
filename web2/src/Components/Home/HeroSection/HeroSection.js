import { Button } from "../Button/Button";
import React, { useRef, useEffect } from "react";
import "./HeroSection.css";
import { Link } from "react-router-dom";
import img from '../../../assets/images/perfumebanner.webp'
import "../Home.css";
export default function HeroSection() {
  
  return (
    <div className="hero-container">
     <img className="img_back" src={img}/>
      {/* <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p> */}
      <div className="hero-btns">
        {/* <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          <Link className="shop" to="/about">
            ABOUT SHOP
          </Link>
        </Button> */}
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          <Link className="shop" to="/products">
            SHOPPING NOW <i className="fa-solid fa-cart-shopping"></i>
          </Link>
        </Button>
      </div>
      <br /> <br /> <br /> <br />
      {/* <h6>“Don't follow the trend.</h6>{" "}
      <h6>Don't make yourself dependent on fashion.</h6> */}
      {/* <h6>
        {" "}
        Let yourself be the one to decide what you will wear and how you will
        live.”
      </h6> */}
    </div>
  );
}
