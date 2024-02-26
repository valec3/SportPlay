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

    // Estado para almacenar el número de tarjetas a mostrar
    const [numCardsToShow, setNumCardsToShow] = useState(2); // Por defecto, mostrar solo 2 tarjetas en pantallas pequeñas

    // Función para determinar el número de tarjetas a mostrar según el tamaño de la pantalla
    const updateNumCardsToShow = () => {
        if (window.innerWidth < 640) {
            setNumCardsToShow(2); // Mostrar solo 2 tarjetas en pantallas pequeñas (menos de 640px de ancho)
        } else if (window.innerWidth < 1024) {
            setNumCardsToShow(3); // Mostrar 3 tarjetas en pantallas medianas (entre 640px y 1024px de ancho)
        } else {
            setNumCardsToShow(torneos.length); // Mostrar todas las tarjetas en pantallas grandes (más de 1024px de ancho)
        }
    };

    // Efecto secundario para actualizar el número de tarjetas a mostrar al cambiar el tamaño de la ventana
    useEffect(() => {
        updateNumCardsToShow();

        // Agregar un listener para el evento resize de la ventana
        window.addEventListener('resize', updateNumCardsToShow);

        // Limpiar el listener en la limpieza del efecto
        return () => {
            window.removeEventListener('resize', updateNumCardsToShow);
        };
    }, []);

    // Filtrar las tarjetas para mostrar solo el número deseado
    const torneosFiltrados = torneos.slice(0, numCardsToShow);

    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-4'>
                {torneosFiltrados.map(torneo => (
                    <Cards key={torneo.nombre} {...torneo} />
                ))}
            </div>
        </div>
    );
};

export default OpenTournaments;
