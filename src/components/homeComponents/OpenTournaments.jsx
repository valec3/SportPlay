import React, { useState, useEffect } from 'react';
import Cards from '../common/Cards';
import { useSelector } from 'react-redux';
import PeticionAllTournaments from '../common/PeticionAllTournaments';

const OpenTournaments = () => {
	const allTournaments = useSelector(
		state => state.allTournaments.allTournaments
	);

	const [startIndex, setStartIndex] = useState(0); // Índice inicial del primer torneo a mostrar
	const [numCardsToShow, setNumCardsToShow] = useState(2); // Número de tarjetas a mostrar

	const updateNumCardsToShow = () => {
		if (window.innerWidth < 640) {
			setNumCardsToShow(2);
		} else if (window.innerWidth < 1024) {
			setNumCardsToShow(3);
		} else {
			setNumCardsToShow(5);
		}
	};
	PeticionAllTournaments();
	useEffect(() => {
		updateNumCardsToShow();

		window.addEventListener('resize', updateNumCardsToShow);
		return () => {
			window.removeEventListener('resize', updateNumCardsToShow);
		};
	}, []);

	const handlePrevClick = () => {
		setStartIndex(Math.max(startIndex - 1, 0));
	};

	const handleNextClick = () => {
		setStartIndex(
			Math.min(startIndex + 1, allTournaments.length - numCardsToShow)
		);
	};

	const torneosToShow = allTournaments.slice(
		startIndex,
		startIndex + numCardsToShow
	);

	return (
		<div className='w-full'>
			<div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3  gap-3 mt-4 relative  mx-auto lg:mx-5 lg:flex lg:justify-center lg:gap-6'>
				{torneosToShow.map((torneo, index) => (
					<Cards key={index} {...torneo} />
				))}
				{startIndex > 0 && (
					<button
						className='absolute top-1/2 transform -translate-y-1/2 left-0 bg-white p-2 rounded'
						onClick={handlePrevClick}
					>
						<img src='icons/Vector.png' alt='Previous' />
					</button>
				)}
				{startIndex + numCardsToShow < allTournaments.length && (
					<button
						className='absolute top-1/2 transform -translate-y-1/2 right-0 bg-white p-2 rounded'
						onClick={handleNextClick}
					>
						<img
							className='text-base-100'
							src='icons/Vector derecha.png'
							alt='Next'
						/>
					</button>
				)}
			</div>
		</div>
	);
};

export default OpenTournaments;
