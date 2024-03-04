import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";

function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  const allTeams = useSelector((state) => state.allTeams.allTeams);
  return (
    <div className="slider-container  ">
      <Slider {...settings} className='w-[90%] mx-auto pb-5'>
            {allTeams.map((team)=>(
			<div key={team.id} className='rounded-md bg-secondary w-[40px] h-[60px]  flex justify-center items-center'>
			<img
				className={`${team.logo_url==null||team.logo_url==''?'w-[40px] h-[45px]':'p-0.5 w-full h-full '}`}
				src={team.logo_url==null||team.logo_url==''?'icon/trophy.png':team.logo_url}
				alt='logo'
			/>
		</div>
			))}
			
      </Slider>
    </div>
  );
}

export default AutoPlay;