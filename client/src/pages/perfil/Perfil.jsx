import React from 'react';
import { useSelector } from 'react-redux';

const Perfil = () => {
	const userData = useSelector(state => state.userData.userData);

	return (
		<div className='bg-primary h-screen w-full px-[30px] '>
			<div className='w-full md:w-[80%] lg:w-[60%] space-y-4 flex flex-col mx-auto'>
				<h1 className=' text-[32px] font-bold font-Roboto pt-5'>Perfil de Usuario:</h1>
				<div className='font-Roboto w-full h-[60px] rounded-[14px] bg-secondary text-neutral flex items-center pl-10'>Nombre: {userData.first_name}</div>
				<div className='font-Roboto w-full h-[60px] rounded-[14px] bg-secondary text-neutral flex items-center pl-10 '>Apellido: {userData.last_name}</div>
				<div className='font-Roboto w-full h-[60px] rounded-[14px] bg-secondary text-neutral flex items-center pl-10 '>DNI: {userData.dni}</div>
				<div className='font-Roboto w-full h-[60px] rounded-[14px] bg-secondary text-neutral flex items-center pl-10 '>Email: {userData.email}</div>
				<div className='font-Roboto w-full h-[60px] rounded-[14px] bg-secondary text-neutral flex items-center pl-10 '>Camiseta: #{userData.id}</div>
			</div>
		</div>
	);
};

export default Perfil;
