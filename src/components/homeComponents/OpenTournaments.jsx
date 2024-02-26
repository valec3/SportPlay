import React, { useState, useEffect } from 'react';
import Cards from '../common/Cards';

const OpenTournaments = () => {
    const torneos = [
        {
            nombre: 'Torneo A',
            vacantes: 3,
            fecha: '22 Jul 2024',
            equipo: 8,
        },
        {
            nombre: 'Torneo B',
            vacantes: 2,
            fecha: '23 Jul 2024',
            equipo: 8,
        },
        {
            nombre: 'Torneo C',
            vacantes: 3,
            fecha: '25 Jul 2024',
            equipo: 8,
        },
        {
            nombre: 'Torneo D',
            vacantes: 1,
            fecha: '26 Jul 2024',
            equipo: 8,
        },
        {
            nombre: 'Torneo E',
            vacantes: 5,
            fecha: '27 Jul 2024',
            equipo: 8,
        },
    ];

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

        window.addEventListener('resize', updateNumCardsToShow);

        return () => {
            window.removeEventListener('resize', updateNumCardsToShow);
        };
    }, []);

    const handlePrevClick = () => {
        setStartIndex(Math.max(startIndex - 1, 0));
    };

    const handleNextClick = () => {
        setStartIndex(Math.min(startIndex + 1, torneos.length - numCardsToShow));
    };

    const torneosToShow = torneos.slice(startIndex, startIndex + numCardsToShow);

    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-4 relative -mx-2'>
                {torneosToShow.map((torneo, index) => (
                    <Cards key={index} {...torneo} />
                ))}
                {startIndex > 0 && (
                    <button
                        className='absolute top-1/2 transform -translate-y-1/2 left-0 bg-white p-2 rounded'
                        onClick={handlePrevClick}
                    >
                        <img src='/public/icons/Vector.png' alt='Previous' />
                    </button>
                )}
                {startIndex + numCardsToShow < torneos.length && (
                    <button
                        className='absolute top-1/2 transform -translate-y-1/2 right-0 bg-white p-2 rounded'
                        onClick={handleNextClick}
                    >
                        <img
                            className='text-base-100'
                            src='/public/icons/Vector derecha.png'
                            alt='Next'
                        />
                    </button>
                )}
            </div>
        </div>
    );
};

export default OpenTournaments;
