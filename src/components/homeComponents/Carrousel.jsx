import React from 'react';
import { useState, useEffect } from 'react';
import Buttons from '../homeComponents/Buttons';

function Carrousel() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const slides = [
		{
			image: './/public/images/banner0.png',
			caption: 	`Simplifica
						la gestion
						deportiva con
						SportPlay`,
		},
		{
			image: './/public/images/banner1.png',
			caption: 	`Inscribete
						y juega.
						La cancha
						te espera`,
		},
		{
			image: './/public/images/banner2.png',
			caption: 	`Desafia a
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
		<div className='relative w-full h-auto'>
			<div className='overflow-hidden'>
				<div
					className='flex transition-transform duration-500 ease-in-out transform'
					style={{ transform: `translateX(-${currentIndex * 100}%)` }}
				>
					{slides.map((slide, index) => (
						<div key={index} className='w-full flex-shrink-0 relative'>
							<img
								src={slide.image}
								alt={`Slide ${index + 1}`}
								className='w-full h-auto'
							/>
							<div className='whitespace-pre-line absolute top-12 left-10 transform -translate-x-4 text-left text-3xl drop-shadow-[3px_3px_2px_rgba(0,0,0,1)] flex flex-col'>
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