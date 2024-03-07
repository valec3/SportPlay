import React, { useState, useEffect } from 'react';
import Buttons from '../homeComponents/Buttons';

function Carrousel() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const slides = [
		{
			image: 'images/banner0.png',
			imageDesktop: 'images/banner-desktop.png',
			caption: `Simplifica
                la gestion
                deportiva con
                SportPlay`,
		},
		{
			image: 'images/banner1.png',
			imageDesktop: 'images/banner-desktop2.png',
			caption: `Inscribete
                y juega.
                La cancha
                te espera`,
			color: '#181829',
		},
		{
			image: 'images/banner2.png',
			imageDesktop: 'images/banner-desktop3.png',
			caption: `Desafia a
                tus Amigos.
                La Competencia
                está aquí.`,
		},
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length);
		}, 5000);

		return () => clearInterval(interval);
	}, [slides.length]);

	return (
		<div className='relative w-full h-auto '>
			<div className='overflow-hidden'>
				<div
					className='flex transition-transform duration-500 ease-in-out transform'
					style={{ transform: `translateX(-${currentIndex * 100}%)` }}
				>
					{slides.map((slide, index) => (
						<div key={index} className='w-full h-[423px] flex-shrink-0 relative'>
							<img
								src={slide.image}
								alt={`Slide ${index + 1}`}
								className='w-full h-auto lg:hidden'
							/>
							<img
								src={slide.imageDesktop}
								alt={`Slide ${index + 1}`}
								className='w-full h-[423px]  lg:visible'
							/>
							<div
								className='whitespace-pre-line text-roboto font-bold text-[32px] leading-[38px] line-height-[120%] 
								absolute top-10 left-10 transform -translate-x-4 text-left text-3xl flex flex-col lg:text-[50px] lg:ml-20 lg:h-52
								lg:leading-[52px] '							 
								style={{
									color: slide.color ? slide.color : 'inherit',
								}}
							>

								{slide.caption}
							</div>
						</div>
					))}
				</div>
			</div>

			<Buttons />
		</div>
	);
}

export default Carrousel;