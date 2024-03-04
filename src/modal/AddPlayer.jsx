import React, { useState } from 'react';

export default function Addplayer() {
	const [nombreEquipo, setNombreEquipo] = useState('');
	const [jugadores, setJugadores] = useState([]);
	const [nombre, setNombre] = useState('');
	const [apellido, setApellido] = useState('');
	const [dni, setDni] = useState('');
	const [numeroCamiseta, setNumeroCamiseta] = useState('');

	const agregarJugador = e => {
		e.preventDefault();
		const nuevoJugador = {
			nombre: nombre,
			apellido: apellido,
			dni: dni,
			numeroCamiseta: numeroCamiseta,
		};
		setJugadores([...jugadores, nuevoJugador]);
		setNombre('');
		setApellido('');
		setDni('');
		setNumeroCamiseta('');
	};

	return (
		<section className=' py-[120px]'>
			<div className='flex items-center justify-center gap-[18px]'>
				<img src='images/teamLogoDef.png' alt='Team Logo' />
				<h1 className='text-xl font-semibold font-Roboto'>
					Equipo: {nombreEquipo}
				</h1>
			</div>

			<hr className='border-[#545458] mt-[13px]' />

			<div className=' mt-[29px] px-[30px]'>
				<h2 className=' font-Roboto font-bold text-[32px] leading-[38.4px]'>
					Agregar Jugador
				</h2>
				<form className=' mt-[26px]' onSubmit={agregarJugador}>
					<div className='flex flex-col gap-[7px]'>
						<div>
							<label className='sr-only '>Nombre:</label>
							<input
								className='w-full bg-secondary rounded-2xl py-[15px] pl-[37.52px] placeholder:font-SourceSansPro placeholder:text-neutral'
								type='text'
								placeholder='Nombre'
								value={nombre}
								onChange={e => setNombre(e.target.value)}
							/>
						</div>

						<div>
							<label className='sr-only '>Apellido:</label>
							<input
								className='w-full bg-secondary rounded-2xl py-[15px] pl-[37.52px] placeholder:font-SourceSansPro placeholder:text-neutral'
								type='text'
								placeholder='Apellido'
								value={apellido}
								onChange={e => setApellido(e.target.value)}
							/>
						</div>

						<div>
							<label className='sr-only '>DNI:</label>
							<input
								className='w-full bg-secondary rounded-2xl py-[15px] pl-[37.52px] placeholder:font-SourceSansPro placeholder:text-neutral'
								type='text'
								placeholder='DNI'
								value={dni}
								onChange={e => setDni(e.target.value)}
							/>
						</div>

						<div>
							<label className='sr-only '>Número de camiseta:</label>
							<input
								className='w-full bg-secondary rounded-2xl py-[15px] pl-[37.52px] placeholder:font-SourceSansPro placeholder:text-neutral'
								type='text'
								placeholder='Número de camiseta'
								value={numeroCamiseta}
								onChange={e => setNumeroCamiseta(e.target.value)}
							/>
						</div>
					</div>

					<div className='flex justify-center mt-11'>
						<button
							className='py-3 bg-accent w-[260px] rounded-2xl'
							type='submit'
						>
							Agregar Jugador
						</button>
					</div>
				</form>
			</div>

			<hr className='border-[#545458] mt-[68.5px]' />

			<div className=' px-[30px] mt-[29.5px]'>
				<h3 className=' font-Roboto font-bold text-[22px] leading-[26.4px]'>
					Jugadores en tu Equipo
				</h3>
				<ul className='mt-[42px] bg-secondary rounded-[14px] py-[25px] flex flex-col gap-[21px]'>
					{jugadores.map((jugador, index) => (
						<li
							className={`flex flex-col justify-center ${index >= 1 && index % 1 === 0 ? 'border-t-[0.5px] border-[#545458] pt-4' : ''}`}
							key={index}
						>
							<div className='flex items-center justify-between px-9'>
								<p className='w-[136px]'>
									{jugador.nombre} {jugador.apellido}
								</p>
								<span># {jugador.numeroCamiseta}</span>
								<button>
									<img
										src='images/deletePlayerIcon.svg'
										alt='Delete Player Icon'
									/>
								</button>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
