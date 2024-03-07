import axios from 'axios';
import { useState, useEffect } from 'react';

const Partidos = () => {
	const [partidos, setPartidos] = useState([]);
	const [torneo, setTorneo] = useState('');

	useEffect(() => {
		const fetchPartidosData = async () => {
			const mockData = [
				{
					torneo: 'Torneo A',
					logo: 'images/barcelona.svg',
					equipoLocal: {
						id: 1,
						nombre: 'Atlético M.',
						logo: 'images/atletico.svg',
					},
					equipoVisitante: {
						id: 2,
						nombre: 'Villarreal',
						logo: 'images/villareal.svg',
					},
					date: '15 mar 2024',
				},
				{
					torneo: 'Torneo B',
					logo: 'images/barcelona.svg',
					equipoLocal: {
						id: 1,
						nombre: 'Atlético M.',
						logo: 'images/atletico.svg',
					},
					equipoVisitante: {
						id: 2,
						nombre: 'Villarreal',
						logo: 'images/villareal.svg',
					},
					date: '15 mar 2024',
				},
				// Otras definiciones de partidos
			];

			setPartidos(mockData);
			setTorneo(mockData[0].torneo);

			const response = await axios.get(
				`https://tournament-sport.onrender.com/api/games/info-list`
			);
			const partidos = await response.data;
			console.log(partidos.data);
			// setPartidos(partidos.data);
		};

		fetchPartidosData();
	}, []);

	return (
		<>
			<div className='bg-primary h-32 w-full px-[30px] flex flex-col items-center lg:flex-row lg:flex-wrap lg:justify-center'>
				<h1 className='text-3xl font-roboto text-white text-center'>
					Partidos
				</h1>
			</div>
			<div className='ml-12 mb-5 text-SansPro font-semibold'>
				<img
					src={partidos[0]?.logo}
					alt={torneo}
					className='w-10 h-10 mr-3 inline-block'
				/>
				{torneo}
			</div>
			{partidos.map((partido, index) => (
				<div key={index} className='ml-12 mb-5 text-SansPro font-semibold'>
					{partido.torneo !== torneo && (
						<>
							<img
								src={partido.logo}
								alt={partido.torneo}
								className='w-10 h-10 mr-3 inline-block'
							/>
							{partido.torneo}
						</>
					)}
					<div
						key={index}
						className='bg-secondary rounded-[14px] h-45 w-335 ml-0 mx-6 my-6 overflow-hidden drop-shadow-lg flex items-center justify-center'
					>
						<div className='p-1 pt-1 w-full mr-2 bg-secondary rounded-[14px]'>
							<div className='h-[60px] flex ml-2 mr-4 items-center justify-center'>
								<div className='flex items-center'>
									<span>{partido.equipoLocal.nombre}</span>
									<img
										className='w-10 h-10 ml-2'
										src={partido.equipoLocal.logo}
										alt={partido.equipoLocal.nombre}
									/>
								</div>
								<div className='text-warning flex items-center justify-center ml-5 '>
									{partido.date}
								</div>
								<div className='flex items-center '>
									<img
										className='w-10 h-10 ml-2'
										src={partido.equipoVisitante.logo}
										alt={partido.equipoVisitante.nombre}
									/>
									<span>{partido.equipoVisitante.nombre}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</>
	);
};

export default Partidos;
