import React from 'react';

const Cards = ({ name, teams_count, logo, status}) => {
	return (
		<div className='bg-base-100 rounded-lg shadow-md p-0 text-center mt-6 h-[210px]'>
			<div className='flex justify-center items-center relative'>

				<div className='bg-neutral rounded-full w-12 h-12 p-1 flex justify-center items-center absolute top-[50%] translate-y-[-50%]'>
					<img
						src={logo==null||logo==''?'icons/trophy.png':logo}
						alt='Trophy'
						className={`${logo==null||logo==''?'w-[25px] h-[25px]':'p-0.5 w-[40px] h-[40px] rounded-full'}`}

					/>  
				</div>
			</div>
			<div>

				<h1 className='text-primary text-2xl font-semibold mt-5'>{name}</h1>

			</div>
			<div className='mt-1.5'>
				<div className='flex-1'>
					<p className='text-primary font-semibold mb-1.5'>de {teams_count} equipos</p>
					<p className='text-primary font-semibold mb-1.5'>{status==ongoing?'Proximo':'Finalizado'}</p>
				</div>
				<div className='text-warning font-semibold'>
					<p>Vacantes: {status==finished?0:teams_count}</p>
				</div>
			</div>
			<div className='flex justify-between items-center w-full h-[34px]  bg-secondary mt-4 px-6'>
				<a className='flex items-center  ' href='#'>
					<img src='icons/plus-circle.png' alt='Plus' />
				</a>
				<a className='flex items-center' href='#'>
					<img
						src='icons/exclamation-circle.png'
						alt='Exclamation'
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
