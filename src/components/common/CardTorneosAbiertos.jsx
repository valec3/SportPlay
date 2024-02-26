import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const Card = () => {
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
			<div>
				<img
					className='ml-2 mt-2 w-full'
					src='images\real-madrid.png'
					alt='Real Madrid'
				/>
			</div>
			<div className='text-left py-4 ml-4'>
				<h1 className='text-SorceSansPro font-semibold text-xl'>
					<span> Copa Los Condes </span>
					<span className='ml-4 pl-1'> &gt; </span>
				</h1>
				<h2 className='text-Roboto text-SemiBold text-base'>
					Equipos de <span className='text-accent'> 4 </span> jugadores
				</h2>
				<h2 className='text-Roboto text-SemiBold text-base'>
					Proxima Fecha: 31/12/2024
				</h2>
				<h2 className='text-Roboto text-SemiBold text-base text-warning '>
					Vacantes: 4
				</h2>
			</div>
		</button>
	);
};

export default Card;
