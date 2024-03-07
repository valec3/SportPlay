import { Link, useNavigate } from 'react-router-dom';
import { FaAngleDown } from 'react-icons/fa6';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PeticionAllTournaments from '../../components/common/PeticionAllTournaments';
import { useSelector } from 'react-redux';

function AdminTorneo() {
	const navigate = useNavigate();
	const currentTournament = (tournament) => {
		return (
			<details className='dropdown dropdown-end bg-secondary'>
				<summary className='m-1 btn bg-secondary border-secondary'>
					<FaAngleDown className='text-base-100 ' />
				</summary>
				<ul className='p-2 shadow menu dropdown-content z-[1] bg-primary border border-secondary w-52'>
					<li className=''>
						<Link className='text-right block'>Compartir Administración</Link>
					</li>
					<li>
						<div
							onClick={() =>
								navigate('/administrar-equipos', { state: tournament })
							}
							className='text-right block'
						>
							Administrar Equipos
						</div>
					</li>
					<li>
						<Link to={`/OrganizeGames/${tournament.id}`} className='text-right block'>Organizar Partidos</Link>
					</li>
					<li>
						<Link to={`/cargar-resultados/${tournament.id}`} className='text-right block'>Cargar Resultados</Link>
					</li>
					<li className=''>
						<Link className='text-right block'>Notificaciones</Link>
					</li>
					<li>
						<Link className='text-warning text-right block   '>
							<div className='flex flex-row  items-center justify-end'>
								<img src='/icons/exit.svg' alt='' />
								<div className='ml-2'>Finalizar Torneo</div>
							</div>
						</Link>
					</li>
				</ul>
			</details>
		);
	};
	const tournamentCancel = (
		<img src='/icons/iconCancel.svg' alt='icono de calcelar' />
	);
	const wonTournament = (
		<img src='/icons/trophyGreen.svg' alt='icono de calcelar' />
	);
	const handleTournamentCancel = () => {};
	PeticionAllTournaments();
	const allTournaments = useSelector(
		state => state.allTournaments.allTournaments
	);
	const userId = useSelector(state => state.userData.userData.id);
	const activeTournaments = allTournaments
		.filter(obj => obj.creator_id === userId)
		.slice(-15)
		.reverse();

	return (
		<div className='space-y-4'>
			<div className='m-auto w-[327px] md:w-[400px] space-y-4 text-neutral'>
				<div className='text-center'>
					<h1 className='text-[2rem] text-base-100 mb-8'>
						Administrador del Torneo
					</h1>
					<Link
						to='/crear-torneo'
						className='bg-accent btn btn-sm border-accent text-base-100 '
					>
						Crear torneo
					</Link>
				</div>
			</div>
			<div className='bg-[#545458] w-full h-[0.5px] mt-0'></div>
			<div className='m-auto pb-60 w-[327px] md:w-[400px] space-y-4 text-neutral'>
				<h2>Torneos creados</h2>
				{activeTournaments.map((tournament, index) => {
					return (
						<div
							className='flex flex-row items-center justify-between bg-secondary h-[61px] p-4 rounded-[14px]'
							key={index}
						>
							<div className='flex flex-row gap-4 items-center '>
								<div className='w-[45px] h-[45px] rounded-full bg-neutral flex justify-center items-center'>
									<img
										src={
											tournament.logo
												? tournament.logo
												: '/icons/trophyAdminTournament.svg'
										}
										alt='icono de trofeo'
										className='w-[40px] h-[40px] rounded-full'
									/>
								</div>

								<div className='w-full'>{tournament.name}</div>
							</div>
							{tournament.status == 'ongoing'
								? currentTournament(tournament)
								: ''}
							{tournament.status == 'finished' ? wonTournament : ''}
							{tournament.status == 'cancelled' ? tournamentCancel : ''}
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default AdminTorneo;
