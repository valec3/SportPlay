import React, { useState } from 'react';
import { FiMenu, FiUser, FiX } from 'react-icons/fi';
import { FaUserLarge } from 'react-icons/fa6';
import { FaRegUser } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { RxExit } from 'react-icons/rx';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};
	const handleModalContainerClick = e => e.stopPropagation();

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	const closeMenu = () => {
		setIsOpen(false);
	};

	return (
		<nav className='bg-primary text-white p-4 flex justify-between items-center sticky top-0 z-10 '>
			{/* Menú hamburguesa */}
			<div className='flex items-center'>
				<div className='sm:hidden '>
					<button
						onClick={toggleMenu}
						className='text-white focus:outline-none'
					>
						<FiMenu className='h-6 w-10' />
					</button>
					{/* Menú hamburguesa desplegable */}
					{isOpen && (
						<div
							onClick={toggleMenu}
							className='absolute top-0 left-0 w-full h-screen bg-black bg-opacity-50 z-50 flex justify-start items-center '
						>
							<div
								onClick={handleModalContainerClick}
								className='absolute top-[90px] bg-secondary text-white w-1/2 h-[423px]   '
							>
								<ul className='text-white font-Roboto flex flex-col items-start pt-[47px]  '>
									<li className='flex items-center hover:bg-gray-700 w-full pl-[30px] h-[47px]'>
										{' '}
										<a>Inicio</a>
									</li>
									<li className='flex items-center hover:bg-gray-700 w-full pl-[30px] h-[47px] '>
										Resultados Torneos
									</li>
									<li className='flex items-center hover:bg-gray-700 w-full pl-[30px] h-[47px] '>
										Torneos Abiertos
									</li>
									<li className='flex items-center hover:bg-gray-700 w-full pl-[30px] h-[47px] '>
										Partidos
									</li>
									<li className='flex items-center hover:bg-gray-700 w-full pl-[30px] h-[47px]'>
										Equipo
									</li>
								</ul>
							</div>
						</div>
					)}
				</div>

				{/* Logo */}
				<div className='flex items-center justify-center sm:justify-start w-64'>
					<img
						src='/images/logo-hori-2.png'
						alt='Logo'
						className='h-14 sm:h-16 ml-10 '
					/>
				</div>
			</div>

			{/* Menú de navegación para pantallas grandes */}
			<div className='hidden sm:flex space-x-4'>
				<a href='#' className='hover:text-gray-400'>
					Inicio
				</a>
				<a href='#' className='hover:text-gray-400'>
					Torneos Abiertos
				</a>
				<a href='#' className='hover:text-gray-400'>
					Resultados Torneos
				</a>
				<a href='#' className='hover:text-gray-400'>
					Partidos
				</a>
				<a href='#' className='hover:text-gray-400'>
					Equipo
				</a>
			</div>

			{/* Icono de usuario y menú desplegable */}
			<div className='relative '>
				<button
					onClick={toggleDropdown}
					className='text-white focus:outline-none flex items-center'
				>
					<FaUserLarge
						className={`${isDropdownOpen ? 'text-green-500' : 'text-white'}`}
					/>
					<MdKeyboardArrowDown
						className={`${isDropdownOpen ? 'text-green-500' : 'text-white'} ml-2`}
					/>
				</button>

				{/* Dropdown para el menú de usuario */}
				{isDropdownOpen && (
					<div className='absolute  right-0 mt-9 w-48 bg-secondary rounded-lg shadow-lg'>
						{/* Botón de cerrar */}
						<button
							className='absolute top-0 right-0 mr-2 mt-4 text-white focus:outline-none'
							onClick={toggleDropdown}
						>
							<FiX />
						</button>
						{/* Contenido del dropdown */}
						<ul className='py-12 '>
							<li className='px-12 py-2 hover:bg-gray-700 flex items-center '>
								<FaUserLarge className='' />
								<a href='#'>Perfil</a>
							</li>
							<li className='px-12 py-2 hover:bg-gray-700'>
								<a href='#'>Actividad</a>
							</li>
							<li className='px-12 py-2 hover:bg-gray-700'>
								<a href='#'>Torneos</a>
							</li>
							<li className='px-12 py-2 hover:bg-gray-700'>
								<a href='#'>Jugador</a>
							</li>
							<li className='px-12 py-2 hover:bg-gray-700'>
								<a href='#'>Resultados</a>
							</li>
							<li className='px-12 py-2 hover:bg-gray-700'>
								<a href='#'>Notificaciones</a>
							</li>
							<li className='px-12 py-2 mb-16 hover:bg-gray-700 '>
								<div className='flex items-center'>
									<RxExit className='text-warning h-6 w-6 mr-2' />
									
								</div>
								<a className='text-warning' href='#'>
										Cerrar Sesión
									</a>
							</li>
						</ul>
					</div>
				)}
			</div>

			{/* Overlay para cerrar el menú al hacer clic fuera */}
			{isOpen && (
				<div
					className='fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-40'
					onClick={closeMenu}
				></div>
			)}
		</nav>
	);
};

export default Navbar;
