import React from 'react';
import { useNavigate } from 'react-router';
import CardTorneosAbiertos from '../../components/common/CardTorneosAbiertos';

const TorneosAbiertos = () => {
	return (
		<div className='bg-primary h-96 w-full px-8'>
			<div className='w-full'>
				<h1 className='font-roboto font-bold text-2xl '>Torneos Abiertos</h1>

				<div className='mt-6'>
					<CardTorneosAbiertos />
				</div>
			</div>
		</div>
	);
};

export default TorneosAbiertos;