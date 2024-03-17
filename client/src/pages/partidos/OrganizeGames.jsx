import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { FaTrophy } from 'react-icons/fa';
import axios from 'axios';
import PeticionAllTournaments from '../../components/common/PeticionAllTournaments';
import { useNavigate } from 'react-router-dom/dist';

const OrganizeGames = () => {
	const params = useParams();
	const navigate = useNavigate()
	const [teams, setTeams] = useState(null);
	const [teamsRamdom, setTeamsRamdom] = useState(false);
	const apiTeamsOfTournamentURL = `https://tournament-sport.onrender.com/api/tournament/tournament-teams?id=${params.id}`;
	const allTournaments = useSelector(
		state => state.allTournaments.allTournaments
	);
	const tournament = allTournaments.find(torneo => torneo.id == params.id);

	PeticionAllTournaments();

	useEffect(() => {
		const fetchTeams = async () => {
			try {
				const response = await axios.get(apiTeamsOfTournamentURL);
				setTeams(response.data.teams);
			} catch (error) {}
		};
		fetchTeams();
	}, []);

	const handleRamdomSelect = () => {
		const compararAleatoriamente = () => Math.random() - 0.5;

		const teamsOrdenadoAlAzar = teams.sort(compararAleatoriamente);

		setTeamsRamdom(true);
		chargeMatch ()
	};

	const chargeMatch = () => {
		const fetchTeams = async () => {
			try {
				const response = await axios.post('https://tournament-sport.onrender.com/api/games/create',{
										
						"date": "2024-03-07",
						"time": "12:00",
						"home_team_id": teams[0].id,
						"away_team_id": teams[1].id,
						"location": "stadium",
					  	'tournament_id':params.id
				  })
				  const response1 = await axios.post('https://tournament-sport.onrender.com/api/games/create',{
										
						"date": "2024-03-07",
						"time": "12:00",
						"home_team_id": teams[2].id,
						"away_team_id": teams[3].id,
						"location": "stadium",
						'tournament_id':params.id
					  				  
				  })
				  
					// console.log(response1, response);
				  
						  
				
			} catch (error) {console.log(error)}}
		
		fetchTeams ();
	}

	return (
		<div className='bg-primary py-4 px-4 w-full min-h-screen'>
			<div className='flex justify-center items-center'>
				<button onClick={()=>{navigate('/administrar-torneo')}} className='bg-primary w-full max-w-[260px] rounded-lg overflow-hidden flex justify-center items-center'>
					<div className='rounded-full bg-neutral w-[40px] h-[40px] ml-5 mt-4 flex justify-center items-center lg:-ml-0 '>
						{tournament && (
							<img
								className={`${tournament.logo == null || tournament.logo == '' ? 'w-[25px] h-[25px]' : 'p-0.5 w-[40px] h-[40px] rounded-full'}`}
								src={
									tournament.logo == null || tournament.logo == ''
										? 'icons/trophy.png'
										: tournament.logo
								}
								alt='Real Madrid'
							/>
						)}
					</div>

					<h1 className='font-Roboto font-semibold text-xl text-left ml-4'>
						{tournament && tournament.name}
					</h1>
				</button>
			</div>

			<div className='bg-[#545458] w-full h-[0.5px] my-4'></div>

			<h1 className='font-Roboto font-bold text-2xl text-center p-2'>
				Organizar Partidos
			</h1>
			<div className='flex justify-center'>
				<button
					onClick={handleRamdomSelect}
					className={`w-260 h-43 rounded-2xl ${!teamsRamdom ? 'bg-accent text-base-100' : 'bg-neutral text-base-100'} font-SourceSansPro font-semibold my-4 py-2 px-4`}
				>
					Organizar Aleatoriamente
				</button>
			</div>

			<div>
				<div className='flex justify-center pt-10 lg:w-[90%] mx-auto'>
					<div className='px-4 mt-2 w-[90%] md:w-1/2 lg:w-[50%]'>
			
						<h1 className='font-Roboto font-semibold text-lg mb-2 h-[50px]'>
							Grupo "A"  
						</h1>
		
						<div className='flex flex-wrap justify-between bg'>
							<button className='w-full h-16 rounded-2xl bg-secondary text-base-100 font-semibold text-xl py-2 px-4 mb-2 flex items-center'>
								{teams ? (
									<>

										<div className='rounded-full bg-neutral w-[40px] h-[40px] ml-1 flex justify-center items-center'>
											{teams[0]?<img

												className={`${teams[0].logo_url == null || teams[0].logo_url == '' ? 'w-[25px] h-[25px]' : 'p-0.5 w-[40px] h-[40px] rounded-full'}`}
												src={
													teams[0].logo_url == null || teams[0].logo_url == ''
														? 'icons/trophy.png'
														: teams[0].logo_url
												}
												alt='Real Madrid'

											/>:<></>}
										</div>
										<div>{!teams ? `cargando...` : teams[0]&&teams[0].name}</div>

									</>
								) : (
									<div>Añadir Equipo</div>
								)}
							</button>

							<button className='w-full h-16 rounded-2xl bg-secondary text-base-100 font-semibold text-xl py-2 px-4 mb-2 flex items-center'>
								{teams ? (
									<>
										<div className='pr-2'>
											{' '}
											{teams[1]&&<img
												className={`${teams[1].logo_url == null || teams[1].logo_url == '' ? 'w-[25px] h-[25px]' : 'p-0.5 w-[40px] h-[40px] rounded-full'}`}
												src={
													teams[1].logo_url == null || teams[1].logo_url == ''
														? 'icons/trophy.png'
														: teams[1].logo_url
												}
												alt='Real Madrid'
											/>}
										</div>
										{!teams ? `cargando...` : teams[0]&&teams[1].name}
									</>
								) : (
									<div>Añadir Equipo</div>
								)}
							</button>
						</div>
					</div>

					<div className='px-4 mt-2 w-[90%] md:w-1/2 lg:w-[50%]'>
						<div className='flex'>
							<h1 className='font-Roboto font-semibold text-lg mb-2 h-[50px]'>
							Grupo "B"  
						</h1>
						<span className='pl-2 text-accent'> - 24/12/2024</span>
						</div>
						<div className='flex flex-wrap justify-between'>
							<button className='w-full h-16 rounded-2xl bg-secondary text-base-100 font-semibold text-xl py-2 px-4 mb-2 flex items-center'>
								{teams ? (
									<>
										<div className='pr-2'>
											{' '}
											{teams[2]&&<img
												className={`${teams[2].logo_url == null || teams[2].logo_url == '' ? 'w-[25px] h-[25px]' : 'p-0.5 w-[40px] h-[40px] rounded-full'}`}
												src={
													teams[2].logo_url == null || teams[2].logo_url == ''
														? 'icons/trophy.png'
														: teams[2].logo_url
												}
												alt='Real Madrid'
											/>}
										</div>
										{!teams ? `cargando...` : teams[2]&&teams[2].name}
									</>
								) : (
									<div>Añadir Equipo</div>
								)}
							</button>
							<button className='w-full h-16 rounded-2xl bg-secondary text-base-100 font-semibold text-xl py-2 px-4 mb-2 flex items-center'>
								{teams ? (
									<>
										<div className='pr-2'>
											{' '}
											{teams[3]&&<img
												className={`${teams[3].logo_url == null || teams[3].logo_url == '' ? 'w-[25px] h-[25px]' : 'p-0.5 w-[40px] h-[40px] rounded-full'}`}
												src={
													teams[3].logo_url == null || teams[3].logo_url == ''
														? 'icons/trophy.png'
														: teams[3].logo_url
												}
												alt='Real Madrid'
											/>}
										</div>
										{!teams ? `cargando...` : teams[3]&&teams[3].name}
									</>
								) : (
									<div>Añadir Equipo</div>
								)}
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className='bg-primary rounded-lg p-4 flex flex-col  md:items-center  py-8 '>
			            <div className='flex py-5'>
							<h1 className='font-Roboto font-semibold text-lg '>
								Finales  	
							</h1>

							<span className='pl-2 text-accent'> - 24/12/2024</span>
						</div>

					<div className='flex justify-center flex-col items-center lg:w-[90%] lg:flex-row lg:gap-8'>
						<button className='w-full h-16 rounded-2xl bg-secondary text-base-100 font-semibold py-2 justify-center px-1 mb-2 flex items-center lg:w-[45%]'>
							<img
								src='images/TeamAdminTorneoLogo.png'
								alt='Equipo A:'
								className='px-4'
							/>
							Ganador Grupo "A"
						</button>
					
						<button className='w-full h-16 rounded-2xl bg-secondary text-base-100 font-semibold  py-2 px-1 mb-2 flex justify-center items-center lg:w-[45%]'>							<img
								src='images/TeamAdminTorneoLogo.png'
								alt='Equipo B:'
								className='px-4'
							/>
							Ganador Grupo "B"
						</button>
					</div>

					<div className='py-10 mx-auto'>
						<FaTrophy className='size-9' />
					</div>
         

					<div className='flex justify-center flex-col items-center lg:w-[90%]'>
					<button className=' w-full h-16 rounded-2xl bg-secondary text-base-100 font-semibold py-2 px-1 mb-2 flex items-center justify-center lg:w-[45%]'>
							<img
								src='images/TeamAdminTorneoLogo.png'
								alt='Equipo Campeón:'
								className='px-4'
							/>
							Grupo "A"
						</button>
					</div>
					
					<div className='mx-auto'>
						<button className='w-[260px] h-[43px] rounded-2xl bg-accent text-base-100 font-SourceSansPro font-semibold mt-8 py-2 px-4'>
							Registrar
						</button>
					</div>
			</div>
		</div>
	);
};

export default OrganizeGames;
