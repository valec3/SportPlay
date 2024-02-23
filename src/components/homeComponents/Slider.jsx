import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container">
      <Slider {...settings} className='w-[90%] mx-auto'>
      <div>
				<img src='images\real-madrid (1).png' alt='slide1' />
			</div>
			<div>
				<img src='images\real-madrid (2).png' alt='slide2' />
			</div>
			<div>
				<img src='images\real-madrid (3).png' alt='slide3' />
			</div>
			<div>
				<img src='images\real-madrid (4).png' alt='slide4' />
			</div>
			<div>
				<img src='images\real-madrid (4).png' alt='slide5' />
			</div>
			<div>
				<img src='images\real-madrid (3).png' alt='slide6' />
			</div>
			<div>
				<img src='images\real-madrid (2).png' alt='slide7' />
			</div>
			<div>
				<img src='images\real-madrid (1).png' alt='slide8' />
			</div>
      </Slider>
    </div>
  );
}

export default AutoPlay;
