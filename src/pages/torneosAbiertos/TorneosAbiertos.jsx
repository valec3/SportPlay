import React, { useEffect } from 'react';
import CardTorneosAbiertos from '../../components/common/CardTorneosAbiertos';
import { useSelector } from 'react-redux';
import PeticionAllTournaments from '../../components/common/PeticionAllTournaments';

const TorneosAbiertos = () => {

    useEffect(() => {	
        
        window.scrollTo({
          top:0,
          behavior:'smooth'
        })	
    }, []);

    PeticionAllTournaments();
    const allTournaments = useSelector((state) => state.allTournaments.allTournaments);
    const torneosToShow = allTournaments.slice(-15).reverse();
    
    return (
        <div className='bg-primary h-full w-full px-8 py-8'>
            <div className='w-full max-w-screen-xl mx-auto'>
                <h1 className='font-roboto font-bold text-2xl text-center'>Torneos Abiertos</h1>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 w-full'>
                    {torneosToShow.map((torneo, index) => (
                    <CardTorneosAbiertos key={index} {...torneo} />
                ))}
                </div>
            </div>
        </div>
    );
};

export default TorneosAbiertos;