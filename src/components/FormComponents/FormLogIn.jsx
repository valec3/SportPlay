import React from 'react';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const FormLogIn = ({ handleLogin }) => {
	const [showPass, setShowPass] = useState(false);

	const handleEyeSlash = () => {
		setShowPass(!showPass);
	};
	const handleSubmit = () => {};
	const IconClaseName = 'text-neutral absolute top-[25px] right-[20px]';

	return (
		<form className='w-full h-full flex flex-col px-[30px]'>
			<h1 className='text-[32px] font-Roboto font-medium text-base-100 py-2 text-left'>
				¡Hola!
			</h1>
			<p className='text-[18px] font-SourceSansPro font-normal text-neutral py-9 mx-auto'>
				Inicia sesión para vivir la emoción de tus torneos favoritos{' '}
			</p>

			<input
				className='bg-secondary h-[64px] w-full rounded-xl px-4 my-3 mx-auto'
				type='Email'
				id='userEmail'
				name='userEmail'
				placeholder='Email'
				// value={}
				// onChange={}
				// onKeyUp={}
				required
			/>
			<div className='relative h-[64px] w-full my-3'>
				<input
					className='bg-secondary w-full h-full rounded-xl px-4  '
					type={`${showPass ? 'text' : 'password'}`}
					id='password'
					name='password'
					placeholder='Contraseña'
					//     value={form.password}
					//     onChange={handleChange}
					//     onFocus={handleOnFocusPassword}
					//     onBlur={handleOnBlurPassword}
					required
				/>
				{showPass ? (
					<FaEye className={IconClaseName} onClick={handleEyeSlash} />
				) : (
					<FaEyeSlash className={IconClaseName} onClick={handleEyeSlash} />
				)}
			</div>

			<p className='text-neutral text-[12px] font-Roboto mx-auto'>
				* La contraseña debe tener entre 4 y 8 caracteres
			</p>
			<div className='px-[30px] my-10'>
				<input
					value='Ingresar'
					className='bg-accent w-full h-[43px] text-base-100 text-[18px] font-SourceSansPro font-medium rounded-2xl  cursor-pointer hover:scale-[102%] mx-auto '
					type='submit'
					onClick={handleSubmit}
				/>
			</div>

			<p className='mx-auto mt-16 text-[16px] font-Roboto text-neutral'>
				¿Eres nuevo en SportPlay?{' '}
				<span
					className='text-success text-[16px] cursor-pointer'
					onClick={handleLogin}
				>
					Regístrate
				</span>
			</p>
		</form>
	);
};

export default FormLogIn;
