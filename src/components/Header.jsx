import React, { useState } from 'react';

const Header = () => {
	return (
		<div className='navbar bg-primary'>
			<div className='navbar-start'>
				<div className='dropdown'>
					<div tabIndex={0} role='button' className='btn btn-ghost btn-circle'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h16M4 18h7'
							/>
						</svg>
					</div>
					<ul
						tabIndex={0}
						className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
					>
						<li>
							<a>Torneos Abiertos</a>
						</li>
						<li>
							<a>Resultados</a>
						</li>
						<li>
							<a>Equipos</a>
						</li>
					</ul>
				</div>
			</div>
			<div className='navbar-center'>
				<img
					src='/images/logo-hori-2.png'
					className='w-auto h-8'
				></img>
			</div>

			<div className='dropdown dropdown-end'>
				<div
					tabIndex={0}
					role='button'
					className='btn btn-ghost btn-circle avatar'
				>
					<div className='w-10 rounded-full'>
						<img
							alt='Tailwind CSS Navbar component'
							src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
						/>
					</div>
				</div>
				<ul
					tabIndex={0}
					className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52'
				>
					<li>
						<a className='justify-between'>
							Perfil
							<span className='badge'>New</span>
						</a>
					</li>
					<li>
						<a>Actividad</a>
					</li>
					<li>
						<a>Logout</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
