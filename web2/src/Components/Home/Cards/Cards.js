import React from "react";
import CardItem from "../CardItems";
import "./Cards.css";
import img from "./../../../assets/images/perfume1.webp";
import img2 from "./../../../assets/images/perfume2.png";
import img3 from "./../../../assets/images/perfume3.webp";
import img4 from "./../../../assets/images/perfume4.webp";
import img5 from "./../../../assets/images/perfume5.webp";
export default function Cards() {
  return (
    <div className="cards">
      <h1>Brand Collection</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={img}
              text="perfume1"
              label="perfume"
              path="/products"
            ></CardItem>
            <CardItem
              src={img2}
              text="perfume2"
              label="perfume"
              path="/products"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={img3}
              text="perfume3"
              label="perfume"
              path="/products"
            />
            <CardItem
              src={img4}
              text="perfume4"
              label="perfume"
              path="/products"
            />
            <CardItem
              src={img5}
              text="perfume5"
              label="perfume"
              path="/products"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
