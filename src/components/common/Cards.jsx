import React from 'react';

const Cards = ({ name, players_count, teams_count, logo, finished}) => {
	return (
		<div className='bg-base-100 rounded-lg shadow-md p-0 text-center mt-6 h-[210px]'>
			<div className='flex justify-center items-center relative'>
				<div className='bg-neutral rounded-full w-12 h-12 flex justify-center items-center absolute top-[50%] translate-y-[-50%]'>
					<img
						src={logo===(null||'')?'public/icons/trophy.png':logo}
						alt='Trophy icon'
						className='w-6 h-6'
					/>  
				</div>
			</div>
			<div>
				<h1 className='text-primary text-2xl font-bold mt-4'>{name}</h1>
			</div>
			<div className='mt-3'>
				<div className='flex-1'>
					<p className='text-primary font-bold mb-1.5'>Equipo de {teams_count}</p>
					<p className='text-primary font-bold mb-1.5'>{finished==0?'Proximo':'Pasado'}</p>
				</div>
				<div className='text-warning font-bold'>
					<p>Vacantes: {teams_count}</p>
				</div>
			</div>
			<div className='flex justify-between items-center w-full h-[34px]  bg-secondary mt-4 px-6'>
				<a className='flex items-center  ' href='#'>
					<img src='/public/icons/plus-circle.png' alt='Plus circle icon' />
				</a>
				<a className='flex items-center' href='#'>
					<img
						src='/icons/exclamation-circle.png'
						alt='Exclamation circle icon'
					/>
				</a>
				<a className='flex items-center' href='#'>
					<img src='icons/Group.png' alt='Group icon' />
				</a>
			</div>
		</div>
	);
};

export default Cards;
