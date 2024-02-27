export default function Activity() {
	return (
		<section className='pt-[108px] pb-[119px] bg-primary text-base-100'>
			<div className='px-[30px]'>
				<h1 className=' font-Roboto font-bold text-[32px]'>Actividad</h1>

				<div className=' flex justify-between mt-[43px]'>
					<h2 className='font-bold text-[22px] font-Roboto leading-[24.53px] tracking-[0.263px]'>
						Torneos Activos
					</h2>
					<span className='font-bold text-success font-Roboto'>
						Crear Torneo
					</span>
				</div>
			</div>

			<div className=' px-[30px] flex flex-col gap-3'>
				<div className='w-full mt-[33px] bg-secondary px-5 flex items-center justify-between py-[13px] rounded-[14px]'>
					<div className='flex items-center gap-[6px]'>
						<img src='images/AdminCopaLogo.png' alt='Cup' />
						<span className='text-xl font-semibold font-SourceSansPro'>
							Copa Las Condes
						</span>
					</div>
					<span className=' text-accent font-SourceSansPro leading-[19.2px]'>
						Administrador
					</span>
				</div>

				<div className='w-full bg-secondary px-5 flex items-center justify-between py-[13px] rounded-[14px]'>
					<div className='flex items-center gap-[6px]'>
						<img src='images/cup.png' alt='Cup' />
						<span className='text-xl font-semibold font-SourceSansPro'>
							Torneo “A”
						</span>
					</div>
					<span className=' text-accent font-SourceSansPro leading-[19.2px]'>
						Jugador
					</span>
				</div>
			</div>

			<img className=' mt-[102px]' src='images/divider.svg' alt='Divider' />

			<div className='px-[30px] mt-[56.89px]'>
				<h3 className=' font-Roboto font-medium text-[22px] leading-[24.53px] tracking-[0.263px]'>
					Próximo Encuentro
				</h3>

				<div>
					<div className='hidden '>
						<p className=' mt-[61px] text-center text-warning font-Roboto text-xl'>
							Los partidos aún no tienen fecha de planificación. Mantente atento
							para futuras actualizaciones
						</p>
					</div>

					<div className=' mt-9'>
						<div>
							<div className='flex items-center gap-[5px]'>
								<img src='images/AdminCopaLogo.png' alt='Admin Copa Logo' />
								<h4 className='text-lg font-Roboto'>Copa Las Condes</h4>
							</div>

							<div className='mt-6 flex flex-col gap-[10px]'>
								<div className='w-full bg-secondary rounded-[14px] px-3 py-4 flex items-center gap-[14px]'>
									<div className='flex items-center gap-[9px]'>
										<span className=' font-SourceSansPro'>Equipo “A”</span>
										<img
											src='images/TeamAdminTorneoLogo.png'
											alt='Team Admin Torneo Logo'
										/>
									</div>
									<span className=' font-SourceSansPro text-warning'>
										27 Agos 2024
									</span>
									<div className='flex items-center gap-[9px] flex-row-reverse'>
										<span className=' font-SourceSansPro'>Equipo “B”</span>
										<img
											src='images/TeamAdminTorneoLogo.png'
											alt='Team Admin Torneo Logo'
										/>
									</div>
								</div>
								<div className='w-full bg-secondary rounded-[14px] px-3 py-4 flex items-center gap-[14px]'>
									<div className='flex items-center gap-[9px]'>
										<span className=' font-SourceSansPro'>Equipo “C”</span>
										<img
											src='images/TeamAdminTorneoLogo.png'
											alt='Team Admin Torneo Logo'
										/>
									</div>
									<span className=' font-SourceSansPro text-warning'>
										12 Dic 2024
									</span>
									<div className='flex items-center gap-[9px] flex-row-reverse'>
										<span className=' font-SourceSansPro'>Equipo “D”</span>
										<img
											src='images/TeamAdminTorneoLogo.png'
											alt='Team Admin Torneo Logo'
										/>
									</div>
								</div>
								<div className='w-full bg-secondary rounded-[14px] px-3 py-4 flex items-center gap-[14px]'>
									<div className='flex items-center gap-[9px]'>
										<span className=' font-SourceSansPro'>Equipo “E”</span>
										<img
											src='images/TeamAdminTorneoLogo.png'
											alt='Team Admin Torneo Logo'
										/>
									</div>
									<span className=' font-SourceSansPro text-warning'>
										12 Dic 2024
									</span>
									<div className='flex items-center gap-[9px] flex-row-reverse'>
										<span className=' font-SourceSansPro'>Equipo “F”</span>
										<img
											src='images/TeamAdminTorneoLogo.png'
											alt='Team Admin Torneo Logo'
										/>
									</div>
								</div>
								<div className='w-full bg-secondary rounded-[14px] px-3 py-4 flex items-center gap-[14px]'>
									<div className='flex items-center gap-[9px]'>
										<span className=' font-SourceSansPro'>Equipo “G”</span>
										<img
											src='images/TeamAdminTorneoLogo.png'
											alt='Team Admin Torneo Logo'
										/>
									</div>
									<span className=' font-SourceSansPro text-warning'>
										12 Dic 2024
									</span>
									<div className='flex items-center gap-[9px] flex-row-reverse'>
										<span className=' font-SourceSansPro'>Equipo “H”</span>
										<img
											src='images/TeamAdminTorneoLogo.png'
											alt='Team Admin Torneo Logo'
										/>
									</div>
								</div>
							</div>
						</div>

						<div className=' mt-[77px]'>
							<div className='flex items-center gap-[5px]'>
								<img
									src='images/TorneoPlayerLogo.png'
									alt='Torneo Player Logo'
								/>
								<h4 className='text-lg font-Roboto text-base-100'>
									Torneo “A”
								</h4>
							</div>

							<div className='mt-6 flex flex-col gap-[10px]'>
								<div className='w-full bg-secondary rounded-[14px] px-3 py-4 flex items-center gap-[14px]'>
									<div className='flex items-center gap-[9px]'>
										<span className=' font-SourceSansPro'>Man City</span>
										<img
											src='images/Atletico.png'
											alt='Team Admin Torneo Logo'
										/>
									</div>
									<span className=' font-SourceSansPro text-warning'>
										29 Jul 2024
									</span>
									<div className='flex items-center gap-[9px] flex-row-reverse'>
										<span className=' font-SourceSansPro'>Crystal Pa</span>
										<img src='images/albion.png' alt='Team Admin Torneo Logo' />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
