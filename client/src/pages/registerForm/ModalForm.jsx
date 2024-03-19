import { FaArrowLeft } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom/dist';
import { closeModal } from '../../redux/featuresSlice/modalSlice';

const ModalForm = ({ children }) => {
    const dispatch = useDispatch();
    const handleModalContainerClick = (e) => e.stopPropagation();
    return (
        <div
            className={`z-40 bg-black/50 fixed w-full h-full top-0 left-0 p-3 py-4 overflow-y-auto`}
            onClick={() => dispatch(closeModal())}
        >
            <div
                className="relative bg-primary w-full max-w-[470px] h-[100%] mx-auto flex justify-center flex-col rounded-lg z-[99]"
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
