import { FaArrowLeft } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../redux/featuresSlice/modalSlice';

const ModalForm = ({ children }) => {
    const dispatch = useDispatch();
    const handleModalContainerClick = (e) => e.stopPropagation();
    return (
        <div
            className={`z-40 bg-black/50 fixed w-full h-full top-0 left-0 overflow-y-auto flex items-center`}
            onClick={() => dispatch(closeModal())}
        >
            <div
                className="relative bg-primary drop-shadow-xl w-full px-2 py-1 sm:px-14 md:px-2 md:max-w-[470px] h-full md:h-fit mx-auto flex justify-center flex-col z-[99] md:rounded-xl lg:my-2"
                onClick={handleModalContainerClick}
            >
                <FaArrowLeft
                    className="  text-base-100 bg-primary w-[24px]  h-[24px] m-[30px] md:mb-[2rem] lg:mb-[1rem]"
                    onClick={() => dispatch(closeModal())}
                />
                {children}
            </div>
        </div>
    );
};

export default ModalForm;
