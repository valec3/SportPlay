import React, { useState } from 'react'
import { FiMenu, FiUser } from 'react-icons/fi';
import {  FaSignOutAlt } from "react-icons/fa";
import { FaUserLarge } from 'react-icons/fa6';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { RxExit } from 'react-icons/rx';
import Modals from '../FormComponents/Modals';

const IconUser = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const [isRegister, setIsRegister] = useState(true);
    const [openModal, setOpenModal] = useState(false);

    const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

    const handleOpenModal = () => {
		setOpenModal(!openModal);
	};
    const handleRegister = () => {
		setIsRegister(!isRegister);
	};

    
  return (
    
			<>
            <button
                onClick={isRegister?toggleDropdown:handleOpenModal}
                className='w-[35px] flex'
            >
                
                <FaUserLarge
						className={`${isRegister?'text-accent':'text-base-100'} `}
					/>
					{isRegister&&<MdKeyboardArrowDown
						className={` ${isDropdownOpen ? 'rotate-180' : ''} ml-2 text-accent`}
					/>}
            </button>
            {/* Dropdown para el menú de usuario */}
            { isDropdownOpen && isRegister && (
                <div className='absolute right-0 top-[90px]  w-[50%] bg-secondary  shadow-lg'>
                    <ul className='h-[376px]'>
                    <div className=' w-full  h-[47px]'  >   
            </div>
            <hr className='border-[#545458]'/>
                        <li className='pl-[15px] h-[47px] flex items-center hover:bg-neutral/20'>
                        <FiUser className='h-[20px] w-[20px] mr-[13px]' /><a href='#'>Perfil</a>
                        </li>
                        <li className='pl-[48px] h-[47px] flex items-center hover:bg-neutral/20'>
                            <a href='#'>Actividad</a>
                        </li>
                        <li className='pl-[48px] h-[47px] flex items-center hover:bg-neutral/20'>
                            <a href='#'>Torneos</a>
                        </li>
                        <li className='pl-[48px] h-[47px] flex items-center hover:bg-neutral/20'>
                            <a href='#'>Jugador</a>
                        </li>
                        <li className='pl-[48px] h-[47px] flex items-center hover:bg-neutral/20'>
                            <a href='#'>Resultados</a>
                        </li>
                        
                        
                    </ul>
                    <hr className='border-[#545458]'/>
                    <button onClick={handleRegister} className='text-warning pl-[25px] h-[47px] flex items-center w-full'>
                           <RxExit className='w-[15px] h-[15px] mr-[7px]' /> <div >Cerrar Sesión</div>
                        </button>
                </div>
            )}
            {openModal&&<Modals/>}
        </>
  )
}

export default IconUser