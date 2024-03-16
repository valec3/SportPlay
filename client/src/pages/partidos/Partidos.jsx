import axios from 'axios';
import { useState, useEffect } from 'react';

const Partidos = () => {
	const [partidos, setPartidos] = useState([]);
	const [torneos, setTorneos] = useState([]);

	useEffect(() => {
		const fetchPartidosData = async () => {
			const response = await axios.get(
				`https://tournament-sport.onrender.com/api/games/info-list`
			);
			const partidos = await response.data;
			const partidosInfo = partidos.data;

			const torneos = Object.values(
				partidosInfo.reduce((partidos, partido) => {
					const torneo = partido.tournament_name;
					partidos[torneo] = partidos[torneo] || [];
					partidos[torneo].push(partido);
					return partidos;
				}, {})
			);

			setPartidos(partidosInfo);
			setTorneos(torneos);
		};

		fetchPartidosData();
	}, []);
	// console.log('Torneos', torneos);
	// console.log('partidos', partidos);

	return (
		<>
			<div className='bg-primary h-32 w-full px-[30px] flex flex-col items-center lg:flex-row lg:flex-wrap lg:justify-center'>
				<h1 className='text-3xl font-roboto text-white text-center'>
					Partidos
				</h1>
			</div>
			{}
			<div className='ml-12 mb-5 text-SansPro font-semibold rounded-full'>
				<img
					src={torneos[0]&&torneos[0][0].tournament_logo}
					alt='logo del torneo'
					className='w-10 h-10 mr-3 inline-block rounded-full'
				/>
				{torneos[0]&&torneos[0][0].tournament_name}
			</div>
			{torneos[0]&&torneos[0].map((partido, index) => {
				return (
					<div key={index}>
						{/* <div className='ml-12 mb-5 text-SansPro font-semibold'>
							<img
								src={partido.tournament_logo}
								alt='logo del torneo'
								className='w-10 h-10 mr-3 inline-block'
							/>
							{partido.tournament_name}
						</div> */}
						<div className='ml-12 mb-5 text-SansPro font-semibold'>
							<div className='bg-secondary rounded-[14px] h-45 w-335 ml-0 mx-6 my-6 overflow-hidden drop-shadow-lg flex items-center justify-center'>
								<div className='p-1 pt-1 w-full mr-2 bg-secondary rounded-[14px]'>
									<div className='h-[60px] flex ml-2 mr-4 items-center justify-center'>
										<div className='flex items-center'>
											<span>{partido.home_team_name}</span>
											<img
												className='w-10 h-10 ml-2'
												src={partido.home_team_logo}
												alt={partido.home_team_name}
											/>
										</div>
										<div className='text-warning flex items-center justify-center ml-5 '>
											vs
										</div>
										<div className='flex items-center '>
											<img
												className='w-10 h-10 ml-2'
												src={partido.away_team_logo}
												alt={partido.away_team_name}
											/>
											<span>{partido.away_team_name}</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default Partidos;
