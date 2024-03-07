import React, { useState } from 'react';
import PeticionAllTournaments from '../components/common/PeticionAllTournaments';
import { useSelector } from 'react-redux';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Group from "../../public/images/Group.svg";
import { useParams } from 'react-router';
import { useEffect } from 'react';

export default function Addplayer() {
	const [teamSelect, setTeamSelect] = useState({
		name: null,
			logo_url: null,
	})
	const [jugadores, setJugadores] = useState([]);
	const [nombre, setNombre] = useState('');
	const [apellido, setApellido] = useState('');
	const [dni, setDni] = useState('');
	const [numeroCamiseta, setNumeroCamiseta] = useState('');
	const [menuTeams, setMenuTeams] = useState(false)
	PeticionAllTournaments();
	const allTeams = useSelector((state) => state.allTeams.allTeams);
	const params = useParams();

	useEffect(() => {
		
	 if( params.id!=null&&params.id!='id'){
		handleTeam(params.id);
	}
	window.scrollTo({
		top:0,
		behavior:'smooth'
	  })
	}, [])
	
	const agregarJugador = e => {
		e.preventDefault();
		const nuevoJugador = {
			nombre: nombre,
			apellido: apellido,
			dni: dni,
			numeroCamiseta: numeroCamiseta,
		};
		setJugadores([...jugadores, nuevoJugador]);
		setNombre('');
		setApellido('');
		setDni('');
		setNumeroCamiseta('');
	};
	const handleClick =()=>{
		setMenuTeams(!menuTeams)
	}
	const handleModalContainerClick = e => e.stopPropagation();
	const handleTeam=(id)=>{
		const selectTeams = allTeams.find((obj)=>obj.id==id);
		selectTeams&&setTeamSelect(selectTeams)
		params.id==null&&handleClick()
		
	}

	return (
		<section className=' py-[50px]'>
			<div className='flex items-center justify-center gap-[18px]'>
				<div className='flex justify-center items-center w-[90%] md:w-[80%] lg:w-[50%] mb-10'>
					<div>
						<div className='w-[45px] h-[45px] mr-3 rounded-full bg-neutral flex justify-center items-center'>
							<img
								src={teamSelect.logo_url==null || teamSelect.logo_url==''?
								Group:teamSelect.logo_url
												}
								alt='icono de equipo'
								className='w-[40px] h-[40px] rounded-full'
							/>				
						</div>	
					</div>
					<h1 className='text-xl font-semibold font-Roboto w-[30%] text-center'>
						Equipo:  
					</h1>
					{params.id!='id'&&params.id!=null?<div className='py-[15px] pl-[37.52px] w-full flex justify-between items-center text-xl'>{teamSelect.name}</div>:
					<div className=' bg-secondary rounded-2xl py-[13px] pl-[37.52px] w-full flex justify-between items-center text-xl' onClick={handleClick}><h2>{teamSelect.name?teamSelect.name:'Elija un equipo'}</h2>
						<div>
							<MdKeyboardArrowDown
								className={` ${menuTeams ? 'rotate-180' : 'rotate-0'} lg:w-[22px] lg:h-[25px] mx-4 transition-all duration-300 `}
							/>
						</div>
					</div>}
				</div>
				
            {/* Dropdown para el menú de usuario */}
            { menuTeams && (
                <div className='w-full h- absolute top-0 left-0 bottom-0 flex justify-center items-center'
                    onClick={handleClick}>
                   <div className='absolute rounded-lg  top-[290px]  w-[70%] md:w-[60%] lg:w-[50%] bg-secondary  shadow-lg'
                    onClick={handleModalContainerClick}>
                    <ul className='h-[400px] overflow-scroll'>           
                        {allTeams.map((team)=>{
							return(
								<div key={team.id}>
									<li 
										 
										onClick={()=>{handleTeam(team.id)}}
										className='pl-[48px] h-[47px] my-3 flex items-center hover:bg-neutral/20'>
										<div className='w-[45px] h-[45px] mr-3 rounded-full bg-neutral flex justify-center items-center'>
											<img
												src={
													team.logo_url?team.logo_url
														: '/icons/trophyAdminTournament.svg'
												}
												alt='icono de trofeo'
												className='w-[40px] h-[40px] rounded-full'
											/>
										</div>
										<div className='text-xl'>{team.name}</div>									
								</li>
								<hr className='border-[#545458] w-full'/>
								</div>
								 
							)
							
						 }) }  
                    </ul>
                </div> 
                </div>
                
            )}
			</div>
		
			<hr className='border-[#545458] mt-[13px]' />

			<div className=' mt-[29px] px-[30px] lg:w-[70%] lg:m-auto'>
				<h2 className=' font-Roboto font-bold text-[22px]  lg:text-2xl  leading-[38.4px] my-10'>
					Agregar Jugador
				</h2>
				<form className=' mt-[26px]' onSubmit={agregarJugador}>
					<div className='flex flex-col gap-[7px]'>
						<div>
							<label className='sr-only '>Nombre:</label>
							<input
								className='w-full bg-secondary rounded-2xl py-[15px] pl-[37.52px] placeholder:font-SourceSansPro placeholder:text-neutral'
								type='text'
								placeholder='Nombre'
								value={nombre}
								onChange={e => setNombre(e.target.value)}
							/>
						</div>

						<div>
							<label className='sr-only '>Apellido:</label>
							<input
								className='w-full bg-secondary rounded-2xl py-[15px] pl-[37.52px] placeholder:font-SourceSansPro placeholder:text-neutral'
								type='text'
								placeholder='Apellido'
								value={apellido}
								onChange={e => setApellido(e.target.value)}
							/>
						</div>

						<div>
							<label className='sr-only '>DNI:</label>
							<input
								className='w-full bg-secondary rounded-2xl py-[15px] pl-[37.52px] placeholder:font-SourceSansPro placeholder:text-neutral'
								type='text'
								placeholder='DNI'
								value={dni}
								onChange={e => setDni(e.target.value)}
							/>
						</div>

						<div>
							<label className='sr-only '>Número de camiseta:</label>
							<input
								className='w-full bg-secondary rounded-2xl py-[15px] pl-[37.52px] placeholder:font-SourceSansPro placeholder:text-neutral'
								type='text'
								placeholder='Número de camiseta'
								value={numeroCamiseta}
								onChange={e => setNumeroCamiseta(e.target.value)}
							/>
						</div>
					</div>

					<div className='flex justify-center mt-11'>
						<button
							className='py-3 bg-accent w-[260px] rounded-2xl '
							type='submit'
						>
							Agregar Jugador
						</button>
					</div>
				</form>
			</div>

			{/*<hr className='border-[#545458] mt-[68.5px]' />

			<div className=' px-[30px] mt-[29.5px] lg:w-[70%] lg:m-auto'>
				<h3 className=' font-Roboto font-bold text-[22px] lg:text-2xl 	leading-[26.4px] my-10'>
					Jugadores en tu Equipo
				</h3>
				<ul className='mt-[42px] bg-secondary rounded-[14px] py-[25px] flex flex-col gap-[21px]'>
					{jugadores.map((jugador, index) => (
						<li
							className={`flex flex-col justify-center ${index >= 1 && index % 1 === 0 ? 'border-t-[0.5px] border-[#545458] pt-4' : ''}`}
							key={index}
						>
							<div className='flex items-center justify-between px-9'>
								<p className='w-[136px]'>
									{jugador.nombre} {jugador.apellido}
								</p>
								<span># {jugador.numeroCamiseta}</span>
								<button>
									<img
										src='images/deletePlayerIcon.svg'
										alt='Delete Player Icon'
									/>
								</button>
							</div>
						</li>
					))}
				</ul>
			</div>*/}
		</section>
	);
}
