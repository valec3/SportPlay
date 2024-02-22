import React, { useState } from 'react'
import { FiMenu, FiUser } from 'react-icons/fi';
import {  FaSignOutAlt } from "react-icons/fa";

const IconUser = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};
  return (
    
			<>
            <button
                onClick={toggleDropdown}
                className='text-white focus:outline-none'
            >
                <FiUser className='h-6 w-6' />
            </button>
            {/* Dropdown para el menú de usuario */}
            {isDropdownOpen && (
                <div className='absolute right-0 top-[90px]  w-[50%] bg-secondary  shadow-lg'>
                    <ul className='h-[376px]'>
                    <div className=' w-full  h-[47px]'  >   
            </div>
            <hr className=''/>
                        <li className='pl-[15px] h-[47px] flex items-center hover:bg-neutral'>
                        <FiUser className='h-[20px] w-[20px] mr-[13px]' /><a href='#'>Perfil</a>
                        </li>
                        <li className='pl-[48px] h-[47px] flex items-center hover:bg-neutral'>
                            <a href='#'>Actividad</a>
                        </li>
                        <li className='pl-[48px] h-[47px] flex items-center hover:bg-neutral'>
                            <a href='#'>Torneos</a>
                        </li>
                        <li className='pl-[48px] h-[47px] flex items-center hover:bg-neutral'>
                            <a href='#'>Jugador</a>
                        </li>
                        <li className='pl-[48px] h-[47px] flex items-center hover:bg-neutral'>
                            <a href='#'>Resultados</a>
                        </li>
                        
                        
                    </ul>
                    <hr />
                    <button className='text-warning pl-[25px] h-[47px] flex items-center w-full'>
                           <FaSignOutAlt className='w-[15px] h-[15px] mr-[7px]'/> <div >Cerrar Sesión</div>
                        </button>
                </div>
            )}
        </>
  )
}

export default IconUser