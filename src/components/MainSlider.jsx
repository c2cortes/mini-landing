import React from "react";
import Slider from "react-slick";

export default function MainSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div>
        <img className="slider-image" src="images/banner-bmwshop-1680x756-021621.jpg" alt="bmwshop"/>
      </div>
      <div>
        <img className="slider-image" src="images/EcommHero-110320-i3-1680x756.jpg" alt="EcommHero"/>
      </div>
    </Slider>
  );
}