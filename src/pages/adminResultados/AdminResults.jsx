const AdminResult = () => {
	const activeTournaments = [
		{
			name: 'Copa Las Condes',
			role: 'Administrador',
			logo: 'images/AdminCopaLogo.png',
			copa: 'images/trophy.svg',
			logoEquipo: 'images/TeamAdminTorneoLogo.png',
		},
		{
			name: 'Copa Relampago',
			role: 'Administrador',
			logo: 'images/real-madrid (4).png',
			copa: 'images/trophy.svg',
			logoEquipo: 'images/TeamAdminTorneoLogo.png',
		},
		{
			name: 'Copa Trueno',
			role: 'Administrador',
			logo: 'images/real-madrid (2).png',
			copa: 'images/trophy.svg',
			logoEquipo: 'images/TeamAdminTorneoLogo.png',
		},
	];

	return (
		<section className='pb-[119px] bg-primary text-base-100 xl:w-[1224px] xl:m-auto '>
			<div className='px-[30px] h-52 flex flex-col justify-center gap-[5px] md:items-center'>
				<h1 className='font-Roboto font-bold text-[32px] mb-5'>Resultados</h1>

				<select
					id=''
					className='w-[320px] h-[61px] rounded-xl px-3 bg-secondary md:w-[537px]'
				>
					<option value='' className=' lg:w-[380px]'>
						Seleccione un torneo
					</option>
					{activeTournaments.map(tournament => (
						<option key={tournament.name} value={tournament.name}>
							{tournament.name}
						</option>
					))}
				</select>
			</div>

			<img
				className='my-[30px] md:w-full'
				src='images/divider.svg'
				alt='Divider'
			/>

			<div className='flex items-center justify-center gap-5'>
				<img src={activeTournaments[1].logo} alt='Logo' />
				<span className='text-lg font-semibold font-Roboto'>
					{activeTournaments[1].name}
				</span>
			</div>

			<div className='w-full flex flex-col  justify-center  items-center gap-4 '>
				<div className='mt-12'>
					<svg
						width='41'
						height='37'
						viewBox='0 0 41 37'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M38.8125 5C39.7266 5 40.5 5.77344 40.5 6.6875V10.625C40.5 13.1562 38.8828 15.7578 36.1406 17.7266C33.8906 19.3438 31.2188 20.3281 28.4062 20.6797C26.1562 24.3359 23.625 25.8125 23.625 25.8125V30.875H27C29.4609 30.875 31.5 32.3516 31.5 34.8125V35.6562C31.5 36.1484 31.0781 36.5 30.6562 36.5H9.84375C9.35156 36.5 9 36.1484 9 35.6562V34.8125C9 32.3516 10.9688 30.875 13.5 30.875H16.875V25.8125C16.875 25.8125 14.2734 24.3359 12.0234 20.6797C9.21094 20.3281 6.53906 19.3438 4.28906 17.7266C1.54688 15.7578 0 13.1562 0 10.625V6.6875C0 5.77344 0.703125 5 1.6875 5H9V2.1875C9 1.27344 9.70312 0.5 10.6875 0.5H29.8125C30.7266 0.5 31.5 1.27344 31.5 2.1875V5H38.8125ZM6.96094 14.0703C7.80469 14.7031 8.78906 15.1953 9.91406 15.6172C9.42188 13.8594 9.07031 11.8203 9 9.5H4.5V10.625C4.5 11.4688 5.20312 12.875 6.96094 14.0703ZM36 10.625V9.5H31.4297C31.3594 11.8203 31.0078 13.8594 30.5156 15.6172C31.6406 15.1953 32.625 14.7031 33.4688 14.0703C34.7344 13.2266 36 11.8203 36 10.625Z'
							fill='#FFFCFC'
						/>
					</svg>
				</div>
				<div className='w-[268px] h-[59px] flex items-center justify-center gap-5  rounded-[14px]  bg-secondary'>
					<img src={activeTournaments[0].logoEquipo} alt='Logo' />
					<p className='text-lg text-neutral md:text-[20px] font-Roboto'>
						Equipo &#34;A&#34;
					</p>
				</div>
			</div>

			<div className='w-[90%] m-auto bg-secondary mt-[45px] text-base-100 rounded-[14px] text-center py-[28px] px-[15px] md:w-[65%]'>
				<h2 className=' text-[32px] font-semibold font-Roboto md:text-[38px] md:leading-[54px]'>
					Finales
				</h2>
				<p className='text-lg text-neutral md:text-[20px] font-Roboto'>
					29 Julio 2024
				</p>

				<div className='mt-[15px] flex items-center justify-between md:justify-evenly'>
					<div>
						<img src='images/real-madrid.png' alt='real madrid' />
						<p className=' text-lg text-neutral font-semibold leading-[27px] font-Roboto mt-3'>
							Equipo “A”
						</p>
					</div>

					<div className='flex gap-2'>
						<span className=' font-Roboto font-semibold text-[48px] leading-[96px] md:text-[64px]'>
							2
						</span>
						<span className=' font-Roboto font-semibold text-[48px] leading-[96px] md:text-[64px]'>
							:
						</span>
						<span className=' font-Roboto font-semibold text-[48px] leading-[96px] md:text-[64px]'>
							1
						</span>
					</div>

					<div>
						<img src='images/real-madrid1.png' alt='real madrid' />
						<p className=' text-lg text-neutral font-semibold leading-[27px] font-Roboto mt-3'>
							Equipo “B”
						</p>
					</div>
				</div>
			</div>

			<div className='lg:flex'>
				<div className='w-[90%] m-auto p-1 pt-0 mt-10  bg-secondary rounded-[16px] mb-4 md:w-[80%] lg:w-[40%]'>
					<table className='w-full  '>
						{/* head */}
						<thead className=''>
							<tr className='text-base-100 text-left  '>
								<th className='pl-5 md:pl-5'>#</th>
								<th className='p-1.5 text-success'>Equipo A</th>
								<th className='p-1.5 border-b border-primary'>TA</th>
								<th className='p-1.5 border-b border-primary'>TR</th>
								<th className='p-1.5 border-b border-primary'>L</th>
								<th className='p-1.5 border-b border-primary'>GL</th>
							</tr>
						</thead>
						<tbody className=''>
							{/* row 1 */}
							<tr className=''>
								<th className='p-1.5'>1</th>
								<td className='flex flex-row space-x-2 p-1.5 pr-8'>
									<img src='images/atletico.svg' alt='' />
									<div>AtléticoMadrid</div>
								</td>
								<td className='p-1.5 border-b border-primary'>0</td>
								<td className='p-1.5 border-b border-primary'>1</td>
								<td className='p-1.5 border-b border-primary'>6</td>
								<td className='p-1.5 border-b border-primary'>4</td>
							</tr>
							{/* row 2 */}
							<tr className=''>
								<th className='p-1.5'>1</th>
								<td className='flex flex-row space-x-2 p-1.5 pr-8'>
									<img src='images/atletico.svg' alt='' />
									<div>AtléticoMadrid</div>
								</td>
								<td className='p-1.5 border-b border-primary'>0</td>
								<td className='p-1.5 border-b border-primary'>1</td>
								<td className='p-1.5 border-b border-primary'>6</td>
								<td className='p-1.5 border-b border-primary'>4</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div className='w-[90%] m-auto p-1 pt-0 mt-10 bg-secondary rounded-[16px] mb-4 md:w-[80%] lg:w-[50%]'>
					<table className='w-full  '>
						{/* head */}
						<thead className=''>
							<tr className='text-base-100 text-left'>
								<th className='p-1.5 md:pl-5'>#</th>
								<th className='p-1.5 text-success'>Equipo B</th>
								<th className='p-1.5 border-b border-primary'>TA</th>
								<th className='p-1.5 border-b border-primary'>TR</th>
								<th className='p-1.5 border-b border-primary'>L</th>
								<th className='p-1.5 border-b border-primary'>GL</th>
							</tr>
						</thead>
						<tbody className=''>
							{/* row 1 */}
							<tr className=''>
								<th className='p-1.5'>1</th>
								<td className='flex flex-row space-x-2 p-1.5 pr-8'>
									<img src='images/atletico.svg' alt='' />
									<div>AtléticoMadrid</div>
								</td>
								<td className='p-1.5 border-b border-primary'>0</td>
								<td className='p-1.5 border-b border-primary'>1</td>
								<td className='p-1.5 border-b border-primary'>6</td>
								<td className='p-1.5 border-b border-primary'>4</td>
							</tr>
							{/* row 2 */}
							<tr className=''>
								<th className='p-1.5'>1</th>
								<td className='flex flex-row space-x-2 p-1.5 pr-8'>
									<img src='images/atletico.svg' alt='' />
									<div>AtléticoMadrid</div>
								</td>
								<td className='p-1.5 border-b border-primary'>0</td>
								<td className='p-1.5 border-b border-primary'>1</td>
								<td className='p-1.5 border-b border-primary'>6</td>
								<td className='p-1.5 border-b border-primary'>4</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</section>
	);
};

export default AdminResult;
