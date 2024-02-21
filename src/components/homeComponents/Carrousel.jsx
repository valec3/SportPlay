import React from 'react';
import { useState, useEffect } from 'react';


function Carrousel() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const slides = [
		{
			image: './/public/images/banner0.png',
			caption: 'Simplifica la gestion deportiva con SportPlay',
		},
		{
			image: './/public/images/banner1.png',
			caption: 'Crea torneos para todos o solo amigos',
		},
		{
			image: './/public/images/banner4.png',
			caption: 'Invita a tus jugadores o rivales de juego',
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
							<div className='absolute bottom-32 left-10 transform -translate-x-4 text-left text-4xl drop-shadow-[4px_4px_2px_rgba(0,0,0,1)] flex flex-col'>
								{slide.caption}
							</div>
						</div>
					))}
				</div>
			</div>
			<div className='absolute bottom-6 left-14 transform -translate-x-1/4 flex flex-col space-y-4'>
				<button className='px-4 py-1 rounded-2xl bg-accent font-SourceSansPro text-base_100'>
					Registrarse
				</button>
				<button className='px-4 py-1 rounded-2xl bg-primary font-SourceSansPro text-base_100'>
					Crear Torneo
				</button>
			</div>
		</div>
	);
}

export default Carrousel;
