import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useSelector } from 'react-redux';

function AutoPlay() {
	const [slidesToShow, setSlidesToShow] = useState(4);

	const updateSlidesToShow = () => {
		const screenWidth = window.innerWidth;

		// Ajusta el número de slidesToShow según el ancho de la pantalla
		setSlidesToShow(4);

		if (screenWidth >= 768) {
			setSlidesToShow(6);
		}

		if (screenWidth >= 1024) {
			setSlidesToShow(8);
		}
	};

	useEffect(() => {
		// Actualiza el número de slidesToShow cuando cambia el tamaño de la pantalla
		window.addEventListener('resize', updateSlidesToShow);
		updateSlidesToShow(); // Llama a la función al cargar la página

		return () => {
			// Limpia el event listener al desmontar el componente
			window.removeEventListener('resize', updateSlidesToShow);
		};
	}, []);

	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: slidesToShow,
		slidesToScroll: 1,
		autoplay: true,
		speed: 3000,
		autoplaySpeed: 2000,
		cssEase: 'linear',
	};
	const allTeams = useSelector(state => state.allTeams.allTeams);
	return (
		<div className='slider-container  '>
			<Slider {...settings} className='w-[90%] mx-auto pb-5'>
				{allTeams.map(team => (
					<div
						key={team.id}
						className='w-[40px] h-[60px]  flex justify-center items-center'
					>
						<img
							className={`${team.logo_url == null || team.logo_url == '' ? 'w-full h-full object-contain  rounded-lg ' : 'p-0.5 w-full h-full object-contain '}`}
							src={
								team.logo_url == null || team.logo_url == ''
									? 'images/teamLogo_urlDef.png'
									: team.logo_url
							}
							alt='logo'
						/>
					</div>
				))}
			</Slider>
		</div>
	);
}

export default AutoPlay;
