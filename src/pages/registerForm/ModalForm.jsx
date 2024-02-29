import { FaArrowLeft } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom/dist';

const ModalForm = ({ children }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const isOpenModal = useSelector(state => state.isOpenModal.isOpenModal);
	const handleModalContainerClick = e => e.stopPropagation();
	
	return (
		<div
			className={`z-50 bg-secondary absolute w-full h-[830px] top-0 left-0`}
			onClick={() => navigate(`/`)}
		>
			<div //modal container
				className='bg-primary w-full sm:w-[450px] h-[100%] mx-auto flex justify-center flex-col  '
				onClick={handleModalContainerClick}
			>
				<FaArrowLeft
					className='  text-base-100 bg-primary w-[24px]  h-[24px] m-[30px] md:mb-[2rem]'
					onClick={() => navigate(`/`)}
				/>
				{children}
			</div>
		</div>
	);
};

export default ModalForm;
