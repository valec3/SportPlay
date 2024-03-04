import React from 'react';
import { useSelector } from 'react-redux';

const Perfil = () => {
	const userData = useSelector(state => state.userData.userData);

	return (
		<div className='bg-primary h-screen w-full px-[30px]'>
			<div className='w-full space-y-4 pl-16'>
				<h1 className=' text-3xl pt-5'>Perfil</h1>
				<div className='font-Roboto '>Nombre: {userData.first_name}</div>
				<div className='font-Roboto '>Apellido: {userData.last_name}</div>
				<div className='font-Roboto '>DNI: {userData.dni}</div>
				<div className='font-Roboto '>Email: {userData.email}</div>
				<div className='font-Roboto '>Id: {userData.id}</div>
			</div>
		</div>
	);
};

export default Perfil;
