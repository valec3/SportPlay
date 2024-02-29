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
		<div>
			<div className='flex justify-center '>
				<h1>Equipo: {nombreEquipo}</h1>
			</div>
			<h2>Agregar Jugador</h2>
			<form onSubmit={agregarJugador}>
				<label>Nombre:</label>
				<input
					type='text'
					value={nombre}
					onChange={e => setNombre(e.target.value)}
				/>
				<br />
				<label>Apellido:</label>
				<input
					type='text'
					value={apellido}
					onChange={e => setApellido(e.target.value)}
				/>
				<br />
				<label>DNI:</label>
				<input type='text' value={dni} onChange={e => setDni(e.target.value)} />
				<br />
				<label>Número de camiseta:</label>
				<input
					type='text'
					value={numeroCamiseta}
					onChange={e => setNumeroCamiseta(e.target.value)}
				/>
				<br />
				<button type='submit'>Agregar Jugador</button>
			</form>
			<h3>Jugadores en tu Equipo</h3>
			<ul>
				{jugadores.map((jugador, index) => (
					<li key={index}>
						{jugador.nombre} - Camiseta: {jugador.numeroCamiseta}
					</li>
				))}
			</ul>
		</div>
	);
}
