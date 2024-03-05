import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import IconUser from './componentHeader/IconUser';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};
	const handleModalContainerClick = e => e.stopPropagation();

	return (
		<nav className='bg-primary text-white py-4 px-[30px] flex justify-between items-center sticky top-0 z-10 h-[90px] drop-shadow-[0px_0px_2px_rgba(0,0,0,0.5)] '>
			{/* Menú hamburguesa */}
			
				<div className='sm:hidden flex items-center'>
					<button
						onClick={toggleMenu}
						className='text-white focus:outline-none w-full'
					>
						<FiMenu className='h-[30px] w-[34px]' />
					</button>
					{/* Menú hamburguesa desplegable */}
					{isOpen && (
						<div
							onClick={toggleMenu}
							className='absolute top-0 left-0 w-full h-screen bg-black bg-opacity-50 z-50 flex justify-start items-center '
						>
							<div
								onClick={handleModalContainerClick}
								className='absolute top-[88px] bg-secondary text-white w-1/2 h-[423px]   '
							>
								<ul className='text-white font-Roboto flex flex-col items-start pt-[47px] '>
									<li className='flex items-center hover:bg-neutral/20 w-full pl-[30px] h-[47px]'>
										<Link to='/'>Inicio</Link>
									</li>
									<li className='flex items-center hover:bg-neutral/20 w-full pl-[30px] h-[47px] '>
										<Link to='/TorneosAbiertos'>Torneos</Link>
									</li>
									<li className='flex items-center hover:bg-neutral/20 w-full pl-[30px] h-[47px] '>
										<Link to='/ResultadosTorneos'>Resultados</Link>
									</li>
									<li className='flex items-center hover:bg-neutral/20 w-full pl-[30px] h-[47px] '>
										<Link to='/Partidos'>Partidos</Link>
									</li>
									<li className='flex items-center hover:bg-neutral/20 w-full pl-[30px] h-[47px]'>
										<Link to='/Equipos'>Equipos</Link>
									</li>
								</ul>
							</div>
						</div>
					)}
				</div>
				{/* Logo */}
				<div className='flex items-center justify-center sm:justify-start w-64 lg:ml-4 '>

				<Link to="/" >
					<img
						src='/images/logo-hori.svg'
						alt='Logo'
						className='h-14 sm:h-16  lg:'
					/>
				</Link>					

				</div>
			
			{/* Menú de navegación para pantallas grandes */}
			<div className='hidden sm:flex space-x-4 lg:text-lg lg:flex lg:justify-between lg:w-[500px] '>

				<Link to='/'>Inicio</Link>

				<Link to='/TorneosAbiertos'>Torneos</Link>

				<Link to='/ResultadosTorneos'>Resultados</Link>

				<Link to='/Partidos'>Partidos</Link>

				<Link to='/Equipos'>Equipos</Link>
			</div>
			{/* Icono de usuario y menú desplegable */}
			<IconUser />
		</nav>
	);
};

export default Navbar;