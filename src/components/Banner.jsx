import React, { useState } from 'react';

const Banner = () => {
	return (
		<div
			className='hero min-h-screen'
			style={{
				backgroundImage: `url('/images/banner.png')`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
		>
			<div className='hero-overlay bg-opacity-5'></div>
			<div className='hero-content text-neutral-content'>
				<div className='max-w-md pl-84'>
					<h1 className='mb-12 text-5xl font-bold'>
						Simplifica la gestión deportiva con SportPlay
					</h1>
					<button className='btn btn-success text-secondary w-167 h-43 mb-14'>
						Registrarse
					</button>
					<button className='btn btn-#1F1D2B text-base-100 w-167 h-43'>
						Crear Torneo
					</button>
				</div>
			</div>
		</div>
	);
};

export default Banner;
