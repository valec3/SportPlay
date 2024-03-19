import { useEffect, useState } from 'react';
import ModalForm from '../../pages/registerForm/ModalForm';
import FormLogIn from './FormLogIn';
import FormSignup from './FormSignup';
import { useSelector } from 'react-redux';

const Modals = () => {
    const [isLogin, setIsLogin] = useState(false);
    const isOpenModal = useSelector((state) => state.isOpenModal.isOpenModal);
    const handleLogin = () => {
        setIsLogin(!isLogin);
    };
    useEffect(() => {
        if (isOpenModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpenModal]);

    return isOpenModal ? (
        <ModalForm>
            {isLogin ? <FormSignup handleLogin={handleLogin} /> : <FormLogIn handleLogin={handleLogin} />}
        </ModalForm>
    ) : null;
};

export default Modals;
