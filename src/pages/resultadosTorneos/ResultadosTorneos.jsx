import React from 'react';
import Result from '../../components/common/Result';

const ResultadosTorneos = () => {
	// Datos de los torneos
	const tournaments = [
		{
			name: 'Torneo A',
			startDate: '10 de marzo 2024',
			teams: [
				{
					id: 1,
					name: 'Atlético Madrid',
					logo: 'images/atletico.svg',
					ta: 0,
					tr: 1,
					l: 6,
					gl: 4,
				},
				{
					id: 2,
					name: 'Real Madrid',
					logo: 'images/realmadrid.svg',
					ta: 0,
					tr: 3,
					l: 7,
					gl: 2,
				},
				{
					id: 3,
					name: 'Barcelona',
					logo: 'images/barcelona.svg',
					ta: 0,
					tr: 4,
					l: 9,
					gl: 1,
				},
				{
					id: 4,
					name: 'Villarreal',
					logo: 'images/villareal.svg',
					ta: 0,
					tr: 2,
					l: 10,
					gl: 0,
				},
			],
		},
		{
			name: 'Torneo B',
			startDate: '6 de mayo 2024',
			teams: [
				{
					id: 1,
					name: 'Atlético Madrid',
					logo: 'images/atletico.svg',
					ta: 0,
					tr: 1,
					l: 6,
					gl: 4,
				},
				{
					id: 2,
					name: 'Real Madrid',
					logo: 'images/realmadrid.svg',
					ta: 0,
					tr: 3,
					l: 7,
					gl: 2,
				},
				{
					id: 3,
					name: 'Barcelona',
					logo: 'images/barcelona.svg',
					ta: 0,
					tr: 4,
					l: 9,
					gl: 1,
				},
				{
					id: 4,
					name: 'Villarreal',
					logo: 'images/villareal.svg',
					ta: 0,
					tr: 2,
					l: 10,
					gl: 0,
				},
			],
		},
		{
			name: 'Torneo C',
			startDate: '6 de mayo 2024',
			teams: [
				{
					id: 1,
					name: 'Atlético Madrid',
					logo: 'images/atletico.svg',
					ta: 0,
					tr: 1,
					l: 6,
					gl: 4,
				},
				{
					id: 2,
					name: 'Real Madrid',
					logo: 'images/realmadrid.svg',
					ta: 0,
					tr: 3,
					l: 7,
					gl: 2,
				},
				{
					id: 3,
					name: 'Barcelona',
					logo: 'images/barcelona.svg',
					ta: 0,
					tr: 4,
					l: 9,
					gl: 1,
				},
				{
					id: 4,
					name: 'Villarreal',
					logo: 'images/villareal.svg',
					ta: 0,
					tr: 2,
					l: 10,
					gl: 0,
				},
			],
		},
		{
			name: 'Torneo D',
			startDate: '6 de mayo 2024',
			teams: [
				{
					id: 1,
					name: 'Atlético Madrid',
					logo: 'images/atletico.svg',
					ta: 0,
					tr: 1,
					l: 6,
					gl: 4,
				},
				{
					id: 2,
					name: 'Real Madrid',
					logo: 'images/realmadrid.svg',
					ta: 0,
					tr: 3,
					l: 7,
					gl: 2,
				},
				{
					id: 3,
					name: 'Barcelona',
					logo: 'images/barcelona.svg',
					ta: 0,
					tr: 4,
					l: 9,
					gl: 1,
				},
				{
					id: 4,
					name: 'Villarreal',
					logo: 'images/villareal.svg',
					ta: 0,
					tr: 2,
					l: 10,
					gl: 0,
				},
			],
		},
		// Agrega más datos de torneos según sea necesario
	];

	return (
		<div className='bg-primary h-auto w-full px-[30px] flex flex-col items-center lg:flex-row lg:flex-wrap lg:justify-center'>
			<div className='w-full lg:w-full'>
				<h1 className='text-3xl font-roboto text-white text-center'>
					Resultados Torneos
				</h1>
			</div>
			{/* Mostrar los resultados de cada torneo */}
			{tournaments.map((tournament, index) => (
				<Result key={index} tournamentData={tournament} />
			))}
		</div>
	);
};

export default ResultadosTorneos;
