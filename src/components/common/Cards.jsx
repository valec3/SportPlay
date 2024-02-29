import React from 'react';

const Cards = ({ nombre, vacantes, fecha, equipo }) => {
	return (
		<div className='bg-base-100 rounded-lg shadow-md p-0 text-center mt-6'>
			<div className='flex justify-center items-center relative'>
				<div className='bg-neutral rounded-full w-14 h-14 flex justify-center items-center absolute top-[50%] translate-y-[-50%]'>
					<img
						src='/public/icons/trophy.png'
						alt='Trophy icon'
						className='w-7 h-7'
					/>  
				</div>
			</div>
			<div>
				<h1 className='text-primary text-2xl font-bold mt-5'>{nombre}</h1>
			</div>
			<div className='mt-4'>
				<div className='flex-1'>
					<p className='text-primary font-bold mb-2'>Equipo de {equipo}</p>
					<p className='text-primary font-bold mb-2'>{fecha}</p>
				</div>
				<div className='text-warning font-bold'>
					<p>Vacantes: {vacantes}</p>
				</div>
			</div>
			<div className='flex justify-between items-center w-full h-[34px]  bg-secondary mt-6 px-6'>
				<a className='flex items-center  ' href='#'>
					{' '}
					<img src='/public/icons/plus-circle.png' alt='Plus circle icon' />
				</a>
				<a className='flex items-center' href='#'>
					<img
						src='/public/icons/exclamation-circle.png'
						alt='Exclamation circle icon'
					/>
				</a>
				<a className='flex items-center' href='#'>
					<img src='/public/icons/Group.png' alt='Group icon' />
				</a>
			</div>
		</div>
	);
};

export default Cards;
