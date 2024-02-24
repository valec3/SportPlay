import React from 'react'
import { useSelector } from 'react-redux';

const Perfil = () => {
    const userData = useSelector((state) => state.userData.userData);

  return (
<div className='bg-primary h-96 w-full px-[30px]'>
			<div className='w-full'>
				<h1 className=' text-3xl'>Perfil</h1>
                <div>Nombre: {userData.first_name}</div>
                <div>Apellido: {userData.last_name}</div>
                <div>DNI: {userData.dni}</div>
                <div>Email: {userData.email}</div>
				
			</div>
		</div> 
          )
}

export default Perfil