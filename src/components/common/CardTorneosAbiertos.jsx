import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const Card = ({ name, teams_count, logo, finished}) => {
	
	const navigate = useNavigate();
	const [isClicked, setIsClicked] = useState(false);

	const handleClick = () => {
		setIsClicked(true);
		navigate('/DetalleTorneoAbierto');
	};

	return (
		<button
			onClick={handleClick}
			className={`bg-secondary rounded-2xl w-full overflow-hidden drop-shadow-[3px_3px_2px_rgba(0,0,0,0.5)] flex ${
				isClicked ? 'opacity-100' : ''
			}`}
		>
			<div className='rounded-full bg-neutral w-[40px] h-[40px] ml-5 mt-4 flex justify-center items-center'>
				<img
					className={`${logo==null||logo==''?'w-[25px] h-[25px]':'p-0.5 w-[40px] h-[40px] rounded-full'}`}
					src={logo==null||logo==''?'./public/icons/trophy.png':logo}
					alt='Real Madrid'
				/>
			</div>
			<div className='text-left py-4 ml-4'>
				<h1 className='text-SorceSansPro font-semibold text-xl'>
					<span>{name}</span>
					<span className='ml-4 pl-1'> &gt; </span>
				</h1>
				<h2 className='text-Roboto text-SemiBold text-base'>
					Torneo de <span className='text-accent'>{teams_count}</span> equipos
				</h2>
				<h2 className='text-Roboto text-SemiBold text-base'>
					Fecha: {finished==0?'Proximo':'Finalizado'}
				</h2>
				<h2 className='text-Roboto text-SemiBold text-base text-warning '>
					Vacantes: {finished==1?0:teams_count}
				</h2>
			</div>
		</button>
	);
};

export default Card;
