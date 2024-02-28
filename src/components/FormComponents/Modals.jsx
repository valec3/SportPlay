import { useState } from 'react';
import ModalForm from '../../pages/registerForm/ModalForm';
import FormLogIn from './FormLogIn';
import FormSignIn from './FormSignIn';

const Modals = () => {
	const [isLogin, setIsLogin] = useState(false);

	const handleLogin = () => {
		setIsLogin(!isLogin);
	};
	return (
		<ModalForm>
			{isLogin ? (
				<FormSignIn handleLogin={handleLogin} />
			) : (
				<FormLogIn handleLogin={handleLogin} />
			)}
		</ModalForm>
	);
};

export default Modals;
