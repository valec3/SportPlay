import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import trophy from '../../../../public/icons/trophy.png'
import axios from 'axios';
import { getTeamsTournament, resetTeamsTournament } from '../../../redux/featuresSlice/teamsPerTournamentSlice';

const DetalleTorneoAbierto = () => {
	const params = useParams()
	const navigate = useNavigate();
	const allTournaments = useSelector((state) => state.allTournaments.allTournaments);
	const allTeamsTournament = useSelector((state) => state.allTeamsTournament.allTeamsTournament);
	const [showModal, setShowModal] = useState(false);
	const modalRef = useRef(null);
	const [vacants, setVacants] = useState(0)
	const apiTeamsOfTournamentURL = `https://tournament-sport.onrender.com/api/tournament/tournament-teams?id=${params.id}`;
	const dispatch = useDispatch();

	useEffect(() => {	
		window.scrollTo({
		  top:0,
		  behavior:'smooth'
		})
		
				dispatch(resetTeamsTournament())
				const fetchDataTeams = async () => {
					try {
					  const res = await axios.get(apiTeamsOfTournamentURL);					  
					  dispatch(getTeamsTournament(res.data.teams))
					  setVacants(tournament.teams_count-res.data.teams.length)
					} catch (er) {
						
					  console.log(er);
					}
				  };
				fetchDataTeams();
				document.addEventListener('click', handleOutsideClick, true);
		return () => {
			document.removeEventListener('click', handleOutsideClick, true);
		};
	}, []);

	const handleButtonClick = () => {
		setShowModal(true);
	};

	const closeModal = () => {
		setShowModal(false);
	};
	const tournament = allTournaments.find((e)=>e.id==params.id)
	const handleOutsideClick = event => {
		if (modalRef.current && !modalRef.current.contains(event.target)) {
			setShowModal(false);
		}
	};

	

	const Modal = ({ onClose }) => (
		<div className='fixed top-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center'>
			<div
				ref={modalRef}
				className='bg-white p-6 rounded-lg w-[80%] h-[200px] md:w-[50%] xl:w-[30%] 2xl:w-[20%]  flex flex-col justify-center'
			>
				<h2 className='text-2xl text-center text-accent font-bold mb-4'>
					¡Éxito!
				</h2>
				<p className='text-secondary text-center'>
					¡Tu solicitud para unirte al equipo ha sido enviada. Pronto recibirás
					una respuesta!
				</p>
			</div>
		</div>
	);

	return (
		<div className='bg-primary w-full min-h-96 flex flex-col justify-center items-center '>
			<button
				onClick={() => {
					navigate('/TorneosAbiertos');
				}}
				className='bg-primary w-full overflow-hidden px-[30px] flex justify-around items-center lg:w-[45%]'
			>
				<div className='w-[90%] flex items-center'>
					<div className='rounded-full bg-neutral w-[40px] h-[40px]  flex justify-center items-center '>
						<img
							className={`${tournament.logo==null||tournament.logo==''?'w-[25px] h-[25px]':'p-0.5 w-[40px] h-[40px] rounded-full'}`}
							src={tournament.logo==null||tournament.logo==''?trophy:tournament.logo}
							alt='logo'
						/>
					</div>
					<div className='text-left py-4 ml-4 flex flex-col '>
						<h1 className='text-SorceSansPro font-semibold text-[20px]'>{tournament.name}</h1>
						
					</div>
				</div>
				<h2 className='text-Roboto text-SemiBold text-base text-warning pl-1 w-36 '>
					Vacantes: {vacants}
				</h2>
			</button>

			<div className='bg-[#545458] w-full h-[0.5px] mt-0'></div>

			<div className='w-full flex flex-col min-h-96'>

			{allTeamsTournament.length>0?
			allTeamsTournament.map((team)=>(
			<button
			key={team.id}

				className='bg-secondary px-3 w-11/12 md:w-4/5 lg:w-3/5 xl:w-2/5 rounded-2xl h-[47px] overflow-hidden drop-shadow-[3px_3px_2px_rgba(0,0,0,0.5)] mt-8 flex justify-between items-center mb-2 mx-auto'

			

				onClick={handleButtonClick}
			>
				<div className='flex justify-center items-center'>
					<div className='rounded-full bg-neutral w-[40px] h-[40px] ml-1 flex justify-center items-center'>
					<img
						className={`${team.logo_url == null || team.logo_url == '' ? 'w-[25px] h-[25px]' : 'p-0.5 w-[40px] h-[40px] rounded-full'}`}
						src={team.logo_url == null || team.logo_url == '' ? 'icons/trophy.png' : team.logo_url}
						alt='Real Madrid'
					/>
					</div>

					<div className='text-left py-4 ml-2'>
						<h1 className='text-SorceSansPro font-regular text-s'>
							{team.name}{' '}
							
						</h1>
					</div>
				</div>
				<div>				
					<span className='text-success ml-16 md:ml-16'>Unirme</span>
				</div>
			</button>
			)):(
					<div className='w-full py-16 flex justify-center items-center'>
						<p>Aun no hay equipos asignados.</p>
					</div>
				
			)
		}</div>
			

		

			

			

			{showModal && <Modal onClose={closeModal} />}
		</div>
		
	);
};

export default DetalleTorneoAbierto;
