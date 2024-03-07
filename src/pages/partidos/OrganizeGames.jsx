import React, { useState } from 'react';

import { FaTrophy } from 'react-icons/fa';

const OrganizeGames = () => {
	return (
		<div className='bg-primary py-4 px-4 w-full min-h-screen'>
			<div className='flex justify-center items-center'>
				<button className='bg-primary w-full max-w-[260px] rounded-lg overflow-hidden flex justify-center items-center'>
					<img
						className='w-12 h-12'
						src='images/Rectangle 64 (2).png'
						alt='Logo Equipo'
					/>

					<h1 className='font-Roboto font-semibold text-xl text-left ml-4'>
						Copa Los Condes
					</h1>
				</button>
			</div>

			<div className='bg-[#545458] w-full h-[0.5px] my-4'></div>

			<h1 className='font-Roboto font-bold text-2xl text-center p-2'>
				Organizar Partidos
			</h1>
			<div className='flex justify-center'>
				<button className='w-260 h-43 rounded-2xl bg-accent text-base-100 font-SourceSansPro font-semibold my-4 py-2 px-4'>
					Organizar Aleatoriamente
				</button>
			</div>

			<div>
				<div className='flex flex-wrap justify-between'>
					<div className='px-4 mt-2 w-full md:w-1/2 lg:w-auto'>
						<h1 className='font-Roboto font-semibold text-lg mb-2'>
							Grupo "A" - <span> </span>
						</h1>
						<div className='flex flex-wrap justify-between'>
							<button className='w-full h-16 rounded-2xl bg-secondary text-base-100 font-semibold text-xl py-2 px-4 mb-2 flex items-center'>
								<img
									src='images/TeamAdminTorneoLogo.png'
									alt='Equipo A'
									className='px-4'
								/>
								Equipo "1"
							</button>
							<button className='w-full h-16 rounded-2xl bg-secondary text-base-100 font-semibold text-xl py-2 px-4 mb-2 flex items-center'>
								<img
									src='images/TeamAdminTorneoLogo.png'
									alt='Equipo A'
									className='px-4'
								/>
								Equipo "2"
							</button>
						</div>
					</div>

					<div className='px-4 w-full md:w-1/2 lg:w-auto'>
						<h1 className='font-Roboto font-semibold text-lg mb-2'>
							Grupo "B" - 24/12/2024
						</h1>
						<div className='flex flex-wrap justify-between'>
							<button className='w-full h-16 rounded-2xl bg-secondary text-base-100 font-semibold text-xl py-2 px-4 mb-2 flex items-center'>
								<img
									src='images/TeamAdminTorneoLogo.png'
									alt='Equipo A'
									className='px-4'
								/>
								Equipo "3"
							</button>
							<button className='w-full h-16 rounded-2xl bg-secondary text-base-100 font-semibold text-xl py-2 px-4 mb-2 flex items-center'>
								<img
									src='images/TeamAdminTorneoLogo.png'
									alt='Equipo A'
									className='px-4'
								/>
								Equipo "4"
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className='bg-primary rounded-lg p-4 flex flex-col md:flex-row md:justify-between md:items-center'>
				<h1 className='font-Roboto font-semibold text-lg mb-2'>
					Finales - 24/12/2024
				</h1>
				<div className='flex flex-wrap justify-between md:flex-nowrap'>
					<button className='w-full h-16 rounded-2xl bg-secondary text-base-100 font-semibold text-xl py-2 px-4 mb-2 flex items-center'>
						<img
							src='images/TeamAdminTorneoLogo.png'
							alt='Equipo A'
							className='px-4'
						/>
						Ganador Grupo "A"
					</button>
					<button className='w-full md:w-auto h-16 rounded-2xl bg-secondary text-base-100 font-semibold text-xl py-2 px-4 mb-2 flex items-center'>
						<img
							src='images/TeamAdminTorneoLogo.png'
							alt='Equipo A'
							className='px-4'
						/>
						Ganador Grupo "B"
					</button>
				</div>
				<div className='flex justify-center pt-6'>
					<FaTrophy className='size-9' />
				</div>

				<button className='w-full md:w-auto h-20 mt-2 md:mt-0 rounded-2xl bg-secondary text-base-100 font-semibold flex-col justify-center items-center md:ml-4'>
					<img
						src='images/TeamAdminTorneoLogo.png'
						alt='Equipo Campeón'
						className='px-4 mt-4'
					/>
					Campeón
				</button>
				<button className='w-260 h-43 rounded-2xl bg-accent text-base-100 font-SourceSansPro font-semibold mt-8 py-2 px-4'>
					Registrar
				</button>
			</div>
		</div>
	);
};

export default OrganizeGames;
