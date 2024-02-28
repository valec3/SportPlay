import { FaArrowLeft } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../redux/featuresSlice/modalSlice';

const ModalForm = ({ children }) => {
	const dispatch = useDispatch();
	const isOpenModal = useSelector(state => state.isOpenModal.isOpenModal);
	const handleModalContainerClick = e => e.stopPropagation();
	// prevent body from scrolling when modal is open
	if (isOpenModal) {
		document.body.style.overflow = 'hidden';
	} else {
		document.body.style.overflow = 'auto';
	}
	return (
		<div
			className={`z-50 bg-black/80 fixed h-screen w-screen overflow-y-hidden inset-0 bottom-0 grid  ${!isOpenModal ? 'hidden' : ''}`}
			onClick={() => dispatch(closeModal())}
		>
			<div //modal container
				className='bg-primary w-full h-full lg:w-fit lg:max-h-[90%] lg:mx-auto lg:my-auto max-lg:py-2 md:rounded-[14px] md:px-[7rem] lg:px-[1rem] flex justify-center flex-col items-start '
				onClick={handleModalContainerClick}
			>
				<FaArrowLeft
					className='  text-base-100 bg-primary w-[24px]  h-[24px] m-[30px] md:mb-[2rem]'
					onClick={() => dispatch(closeModal())}
				/>
				{children}
			</div>
		</div>
	);
};

export default ModalForm;
