import { useState } from 'react';
import { FiUser } from 'react-icons/fi';
import { FaUserLarge } from 'react-icons/fa6';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { RxExit } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import { closeSesion } from '../../redux/featuresSlice/registerSlice';
import { Link } from 'react-router-dom';
import { changeData } from '../../redux/featuresSlice/userSlice';
import { useNavigate } from 'react-router-dom/dist';
import { openModal } from '../../redux/featuresSlice/modalSlice';

const IconUser = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isRegister = useSelector((state) => state.isRegister.isRegister);
    const userData = useSelector((state) => state.userData.userData);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const handleModalContainerClick = (e) => e.stopPropagation();

    const handleOpenModal = () => {
        dispatch(openModal());
    };
    const handleCloseSesion = () => {
        let initialState = {
            userData: {
                id: null,
                first_name: '',
                last_name: '',
                dni: 0,
                email: '',
            },
        };
        dispatch(changeData(initialState));
        navigate('/');
        dispatch(closeSesion());
    };

    return (
        <>
            <button
                onClick={isRegister ? toggleDropdown : handleOpenModal}
                className={`${isRegister ? 'w-[35px] flex' : 'w-[34px] flex justify-end'} `}
            >
                <FaUserLarge className={`${isRegister ? 'text-accent' : 'text-base-100 w-[20px]'}`} />
                {isRegister && (
                    <MdKeyboardArrowDown
                        className={` ${
                            isDropdownOpen ? 'rotate-180' : 'rotate-0'
                        } transition-all duration-300 ml-2 text-accent`}
                    />
                )}
            </button>
            {/* Dropdown para el menú de usuario */}
            {isDropdownOpen && isRegister && (
                <div className="w-full   h-screen absolute top-0 left-0 bg-black/75" onClick={toggleDropdown}>
                    <div
                        className="absolute right-0 top-[90px]  w-[50%] bg-secondary  shadow-lg md:w-[20%]"
                        onClick={handleModalContainerClick}
                    >
                        <ul className="h-[376px]">
                            <div className=" w-full  md:w-[25%]   h-[47px] flex justify-start items-center lg:w-full">
                                <FiUser className="h-[20px] w-[20px] mr-[13px] ml-[14px]" />
                                <h3>¡Hola, {userData.first_name}!</h3>
                            </div>
                            <hr className="border-[#545458]" />
                            <li
                                className="pl-[48px] h-[47px] flex items-center hover:bg-neutral/20"
                                onClick={() => toggleDropdown(false)}
                            >
                                <Link className="w-full" to={'/Perfil'}>
                                    Perfil
                                </Link>
                            </li>
                            <li
                                className="pl-[48px] h-[47px] flex items-center hover:bg-neutral/20"
                                onClick={() => toggleDropdown(false)}
                            >
                                <Link className="w-full" to="Activity">
                                    Actividad
                                </Link>
                            </li>
                            <li
                                className="pl-[48px] h-[47px] flex items-center hover:bg-neutral/20"
                                onClick={() => toggleDropdown(false)}
                            >
                                <Link className="w-full" to="/crear-torneo">
                                    Crear torneo
                                </Link>
                            </li>
                            <li
                                className="pl-[48px] h-[47px] flex items-center hover:bg-neutral/20"
                                onClick={() => toggleDropdown(false)}
                            >
                                <Link className="w-full" to="/addPlayer/id">
                                    Jugador
                                </Link>
                            </li>
                            <li
                                className="pl-[48px] h-[47px] flex items-center hover:bg-neutral/20 w-full"
                                onClick={() => toggleDropdown(false)}
                            >
                                <Link className="w-full" to="/Admin-Resultados">
                                    Resultados
                                </Link>
                            </li>
                        </ul>
                        <hr className="border-[#545458]" />
                        <button
                            onClick={handleCloseSesion}
                            className="text-warning pl-[25px] h-[47px] flex items-center w-full"
                        >
                            <RxExit className="w-[15px] h-[15px] mr-[7px]" /> <div>Cerrar Sesión</div>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default IconUser;
