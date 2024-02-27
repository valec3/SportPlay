const Tournament = ({ logo, name, role }) => (
	<div className='w-full bg-secondary rounded-[14px] px-5 flex items-center justify-between py-[13px]'>
		<div className='flex items-center gap-[6px]'>
			<img src={logo} alt='Logo' />
			<span className='text-xl font-semibold font-SourceSansPro'>{name}</span>
		</div>
		<span className='text-accent font-SourceSansPro leading-[19.2px]'>
			{role}
		</span>
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
	// Data for active tournaments
	const activeTournaments = [
		{
			name: 'Copa Las Condes',
			role: 'Administrador',
			logo: 'images/AdminCopaLogo.png',
		},
	];

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
			logoTeamOne: 'images/atletico.png',
			logoTeamTwo: 'images/albion.png',
		},
	];

	return (
		<section className='pt-[108px] pb-[119px] bg-primary text-base-100'>
			<div className='px-[30px]'>
				<h1 className='font-Roboto font-bold text-[32px]'>Actividad</h1>
				<div className='flex justify-between mt-[43px]'>
					<h2 className='font-bold text-[22px] font-Roboto leading-[24.53px] tracking-[0.263px]'>
						Torneos Activos
					</h2>
					<span className='font-bold text-success font-Roboto'>
						Crear Torneo
					</span>
				</div>
			</div>

			<div className=' mt-[25px] flex flex-col gap-3'>
				<div className='px-[30px] flex flex-col gap-3'>
					{activeTournaments.map((tournament, index) => (
						<Tournament key={index} {...tournament} />
					))}
				</div>

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

				<div className=' mt-9'>
					<div className='flex items-center gap-[5px]'>
						<img src={activeTournaments[0].logo} alt='Logo' />
						<span className='text-lg font-semibold font-Roboto'>
							{activeTournaments[0].name}
						</span>
					</div>

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
		</section>
	);
}
