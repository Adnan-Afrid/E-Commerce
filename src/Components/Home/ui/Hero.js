import React from "react";
import "../assets/Hero.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import image1 from "../../../Public/images/homeImage1.png";
import image2 from "../../../Public/images/homeImage2.jpg";
import image3 from "../../../Public/images/home.jpg";
const Hero = () => {
  const slideImages = [
    {
      url: image3,
    },
    {
      url: image2,
    },
    {
      url: image1,
    },
  ];
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <img src={slideImage.url} alt="Loading"/>
            <h2>WINTER COLLECTION WITH 50% OFF! TILL 28 SEP.</h2>
            <button className="shopnow">SHOP NOW</button>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Hero;
