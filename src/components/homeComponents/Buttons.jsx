import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../redux/featuresSlice/modalSlice';
import { Link, useNavigate } from 'react-router-dom/dist';

const Buttons = () => {

	const navigate = useNavigate();
    const isRegister = useSelector((state) => state.isRegister.isRegister);


	const handleOpenModal = () => {
		navigate(`/Modals`);
	};
	const handleCrearTorneo = () => {
		navigate(`/crear-torneo`);
	};

	return (
		<div className='absolute bottom-12 left-14 px-2 transform -translate-x-1/4 flex flex-col space-y-8 lg:mb-10 lg:space-y-1 lg:ml-32 lg:flex-row lg:items-center '>
			{!isRegister&&<button
				onClick={handleOpenModal}
				className='px-6 py-2 rounded-2xl drop-shadow-[3px_3px_2px_rgba(0,0,0,0.5)] font-SourceSansPro text-primary font-semibold bg-accent hover:bg-success transition duration-300 
				ease-in-out lg:w-[167px] lg:h-[43px] lg:mr-10'
			>
				Registrarse
			</button>}
			<button
				onClick={isRegister?handleCrearTorneo:handleOpenModal}
				className='px-6 py-2 rounded-2xl drop-shadow-[3px_3px_2px_rgba(0,0,0,0.5)] font-SourceSansPro text-base-100 bg-secondary hover:bg-success transition duration-300 ease-in-out lg:w-[167px] lg:h-[43px]'
			>
				Crear Torneo
			</button>
		</div>
	);
};

export default Buttons;