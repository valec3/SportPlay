import React, { useState, useEffect } from 'react';
import Cards from '../common/Cards';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getTournaments } from '../../redux/featuresSlice/tournamentSlice';

const OpenTournaments = () => {

    const dispatch = useDispatch();
    const allTournaments = useSelector((state) => state.allTournaments.allTournaments);

    const tournaments = () => {
		axios
			.get('https://tournament-sport.onrender.com/api/tournament/all-tournaments'
			)
			.then((res) => {
				dispatch(getTournaments(res.data))
			})
			.catch((er) =>{
				console.log(er);
			})
	}

	const [startIndex, setStartIndex] = useState(0); // Índice inicial del primer torneo a mostrar
	const [numCardsToShow, setNumCardsToShow] = useState(2); // Número de tarjetas a mostrar

	const updateNumCardsToShow = () => {
		if (window.innerWidth < 640) {
			setNumCardsToShow(2);
		} else if (window.innerWidth < 1024) {
			setNumCardsToShow(3);
		} else {
			setNumCardsToShow(4);
		}
	};

    useEffect(() => {
        
        updateNumCardsToShow();
        tournaments();
        window.addEventListener('resize', updateNumCardsToShow);
		return () => {
			window.removeEventListener('resize', updateNumCardsToShow);
		};
	}, []);

	const handlePrevClick = () => {
		setStartIndex(Math.max(startIndex - 1, 0));
	};

    const handleNextClick = () => {
        setStartIndex(Math.min(startIndex + 1, allTournaments.length - numCardsToShow));
    };

    const torneosToShow = allTournaments.slice(startIndex, startIndex + numCardsToShow);

    return (
        <div className='w-full'>
            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-4 relative  mx-auto'>
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
