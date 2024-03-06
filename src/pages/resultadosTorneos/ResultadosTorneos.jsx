import React from 'react';
import Result from '../../components/common/Result';
import { useSelector } from 'react-redux';
import PeticionAllTournaments from '../../components/common/PeticionAllTournaments';

const ResultadosTorneos = () => {
	const allTournaments = useSelector((state) => state.allTournaments.allTournaments);
	const torneosToShow = allTournaments.slice(-15).reverse();
	// Datos de los torneos
	PeticionAllTournaments();//hace una nueva peticion para actulizar datos
	

	return (
		<div className='bg-primary h-auto w-full px-[30px] flex flex-col items-center lg:flex-row lg:flex-wrap lg:justify-center gap-x-14'>
			<div className='w-full lg:w-full'>
				<h1 className='text-2xl font-roboto font-bold text-white text-center pt-8'>
					Resultados Torneos
				</h1>
			</div>
			{/* Mostrar los resultados de cada torneo */}
			{torneosToShow.map((tournament, index ) => (
				<Result key={index} {...tournament}  />
			))}
		</div>
	);
};

export default ResultadosTorneos;
