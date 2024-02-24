import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../redux/featuresSlice/modalSlice';

const ModalForm = ({ children }) => {
	const dispatch = useDispatch();
    const isOpenModal = useSelector((state) => state.isOpenModal.isOpenModal);
	const handleModalContainerClick = e => e.stopPropagation();
	return (
		<article
			className={`bg-black/75 absolute z-40 top-0 left-0 w-full h-[2245px]  flex justify-center  ${
				!isOpenModal && 'hidden'
			}`}
			onClick={()=>dispatch(closeModal())}
		>
			<div //modal container
				className='bg-primary  w-full h-[1050px] sm:w-[430px]  md:my-[30px] md:rounded-[14px] '
				onClick={handleModalContainerClick}
			>
				<FaArrowLeft
					className='  text-base-100   bg-primary w-[24px]  h-[24px] m-[30px]'
					onClick={()=>dispatch(closeModal())}
				/>
				{children}
			</div>
		</article>
	);
};

export default ModalForm;
