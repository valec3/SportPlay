import React from 'react';
import { useNavigate } from 'react-router';
import CardTorneosAbiertos from '../../components/common/CardTorneosAbiertos';

const TorneosAbiertos = () => {
    return (
        <div className='bg-primary h-full w-full px-8 py-8'>
            <div className='w-full max-w-screen-xl mx-auto'>
                <h1 className='font-roboto font-bold text-2xl text-center'>Torneos Abiertos</h1>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
                    <CardTorneosAbiertos />
                    <CardTorneosAbiertos />
                    <CardTorneosAbiertos />
                </div>
            </div>
        </div>
    );
};

export default TorneosAbiertos;