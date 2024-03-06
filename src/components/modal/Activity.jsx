import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom/dist";
import PeticionAllTournaments from "../common/PeticionAllTournaments";
import { useState } from "react";
import { useEffect } from "react";

const roleActivity =(role)=>{
	let roleUser = ''
	if(role=='Administrador'){
	roleUser='/administrar-torneo'
}else if(role=='Jugador'){
	roleUser='/addPlayer'
}
return roleUser
}

const Tournament = ({ logo, name, role }) => (
	
	<div className='w-full bg-secondary rounded-[14px] px-5 flex items-center justify-between py-[13px]'>
		<div className='flex items-center gap-[6px]'>
		<div className='rounded-full bg-neutral w-[40px] h-[40px] flex justify-center items-center'>
								<img 
							src={logo == null || logo == '' ? 'icons/trophy.png' : logo}
							alt='Logo'
							className={`${logo == null || logo == '' ? 'w-[25px] h-[25px]' : 'p-0.5 w-[40px] h-[40px] rounded-full'}`}
							/>
							</div>
			<span className='text-lg font-semibold font-SourceSansPro'>{name}</span>
		</div>
		<Link to={roleActivity(role)} className='text-accent font-SourceSansPro leading-[19.2px]'>
			{role}
		</Link>
	</div>
);

const Match = ({
	nameTeamOne,
	nameTeamTwo,
	date,
	logoTeamOne,
	logoTeamTwo,
}) => (
	<div className='w-full bg-secondary rounded-[14px] px-3 py-4 flex items-center gap-[14px]'>
		<div className='flex items-center gap-[9px]'>
			<span className='font-SourceSansPro'>{nameTeamOne}</span>
			<img src={logoTeamOne} alt='Logo' />
		</div>
		<span className='font-SourceSansPro text-warning'>{date}</span>
		<div className='flex items-center gap-[9px] flex-row-reverse'>
			<span className='font-SourceSansPro'>{nameTeamTwo}</span>
			<img src={logoTeamTwo} alt='Logo' />
		</div>
	</div>
);

export default function Activity() {
	const navigate = useNavigate();
	const [activity, setActivity] = useState(false)
	PeticionAllTournaments();
	const allTournaments = useSelector((state) => state.allTournaments.allTournaments);
	const userId = useSelector((state) => state.userData.userData.id);
	const activeTournaments = allTournaments.filter((obj)=>obj.creator_id===userId);
	useEffect(() => {
		if(activeTournaments.length>0){
			setActivity(true)
		}else{
			setActivity(false)
		}
	}, [allTournaments])
	

	const activePlayerTournaments = [
		{ name: 'Torneo A', role: 'Jugador', logo: 'images/cup.png' },
	];

	const nextAdminTournament = [
		{
			nameTeamOne: 'Equipo “A”',
			nameTeamTwo: 'Equipo “B”',
			date: '2024-10-30',
			logoTeamOne: 'images/TeamAdminTorneoLogo.png',
			logoTeamTwo: 'images/TeamAdminTorneoLogo.png',
		},

		{
			nameTeamOne: 'Equipo “C”',
			nameTeamTwo: 'Equipo “D”',
			date: '2024-09-10',
			logoTeamOne: 'images/TeamAdminTorneoLogo.png',
			logoTeamTwo: 'images/TeamAdminTorneoLogo.png',
		},
	];

	const nextPlayerTournament = [
		{
			nameTeamOne: 'Man City',
			nameTeamTwo: 'Crystal Pa',
			date: '2024-07-29',
			logoTeamOne: 'images/Atletico.png',
			logoTeamTwo: 'images/albion.png',
		},
	];

	const handleCrearTorneo = () => {
		navigate(`/crear-torneo`);
	};

	return (
		<section className='pt-[30px] pb-[119px] bg-primary text-base-100'>
			{activity?
				<>
				<div className='px-[30px]'>
					<h1 className='font-Roboto font-bold text-[32px]'>Actividad</h1>
					<div className='flex justify-between mt-[43px]'>
						<h2 className='font-bold text-[22px] font-Roboto leading-[24.53px] tracking-[0.263px]'>
							Torneos Activos
						</h2>
						<span onClick={handleCrearTorneo} className='font-bold text-success font-Roboto cursor-pointer'>
							Crear Torneo
						</span>
					</div>
				</div>

				<div className=' mt-[25px] flex flex-col gap-3'>
					{activeTournaments&&<div className='px-[30px] flex flex-col gap-3'>
						{activeTournaments.map((tournament, index) => (
							<Tournament key={index} {...tournament} role={'Administrador'} />
						))}
					</div>}

					<div className='px-[30px] flex flex-col gap-3'>
						{activePlayerTournaments.map((tournament, index) => (
							<Tournament key={index} {...tournament} />
						))}
					</div>
				</div>

				<img className='mt-[102px]' src='images/divider.svg' alt='Divider' />

				<div className='px-[30px] mt-[56.89px]'>
					<h3 className='font-Roboto font-medium text-[22px] leading-[24.53px] tracking-[0.263px]'>
						Próximo Encuentro
					</h3>

					<div>
						<div className=' mt-9'>
							
							{
								activeTournaments.map((obj, index) => (
								<div key={index} className='flex items-center gap-[5px]'>
									<img src={obj.logo} alt='Logo' className="w-[45px] h-[45px]" />
									<span className='text-lg font-semibold font-Roboto'>
									{obj.name}
									</span>
								</div>))
							}

							<div className=' mt-[25px] flex flex-col gap-3'>
								<div className='flex flex-col gap-3'>
									{nextAdminTournament.map((adminTournament, index) => (
										<Match key={index} {...adminTournament} />
									))}
								</div>
							</div>
						</div>

						<div className=' mt-[68px]'>
							<div className='flex items-center gap-[5px]'>
								<img src={activePlayerTournaments[0].logo} alt='Logo' />
								<span className='text-lg font-semibold font-Roboto'>
									{activePlayerTournaments[0].name}
								</span>
							</div>

							<div className=' mt-[25px] flex flex-col gap-3'>
								<div className='flex flex-col gap-3'>
									{nextPlayerTournament.map((playerTournament, index) => (
										<Match key={index} {...playerTournament} />
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
				</>:
				<>
				<div className="flex flex-col px-[30px]">
					<div className="flex justify-center p-5">
						<img src="icons/logo-vert.png" alt="logo sport play" />
					</div>
					<div className="flex justify-center py-4">
						<h1 className="font-Roboto text-[32px] text-accent font-bold">Sin Actividad</h1>
					</div>
					<p className="text-[16px] font-SourceSansPro text-neutral text-center">Sumate a un equipo o crea un torneo y accede a la diversion.</p>
					<div className="flex justify-around py-10">
					<Link
						to='/crear-torneo'
						className='px-3 py-2 rounded-2xl font-SourceSansPro text-base-100 font-semibold bg-success transition duration-300 ease-in-out text-[14px]'
			>
				Crear Torneo
			</Link>
			<Link
				to='/addPlayer'
				className='px-3 py-2 rounded-2xl font-SourceSansPro text-base-100 font-semibold bg-accent  transition duration-300 ease-in-out text-[14px]'
			>
				Unirme a un equipo
			</Link>
					</div>
				</div>
				
				</>
			}
		</section>
	);
}
