import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useState } from 'react';
import { FaEye, FaEyeSlash, FaCheck } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import Swal from "sweetalert2";
import { closeModal } from '../../redux/featuresSlice/modalSlice';
import { initiaSesion } from '../../redux/featuresSlice/registerSlice';


const FormLogIn = ({ handleLogin }) => {
	const [showPass, setShowPass] = useState(false);
	const [submitOk, setSubmitOk] = useState(false)

	const dispatch = useDispatch();
    //const isOpenModal = useSelector((state) => state.isOpenModal.isOpenModal);
    const isRegister = useSelector((state) => state.isRegister.isRegister);

	const handleEyeSlash = () => {
		setShowPass(!showPass);
	};
	const IconClaseName = 'text-neutral absolute top-[25px] right-[20px]';

	const submitForm = (values, {resetForm}) =>{
		axios
			.post('https://tournament-sport.onrender.com/api/auth/login',
			values)
			.then((res) => {
				console.log(res);
				setTimeout(() => {
					setSubmitOk(false);
					resetForm();
					dispatch(initiaSesion());
					dispatch(closeModal());
				}, 1000);
			})
			.catch((er) =>{
				console.log(er);
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Hubo un error en su email o contraseña",
					footer: '<a href="#">Por favor vuelve a intentarlo.</a>',
				  })
				  setSubmitOk(false);

			})
	}

	return (
		<Formik
			initialValues={{
				email: '',
				password: ''
			}}
			onSubmit={(values, {resetForm})=>{
				submitForm(values, {resetForm})
				setSubmitOk(true);			}}
		>
			{()=>(
			<Form className='w-full h-full flex flex-col px-[30px]'>
			<h1 className='text-[32px] font-Roboto font-medium text-base-100 py-2 text-left'>
				¡Hola!
			</h1>
			<p className='text-[18px] font-SourceSansPro font-normal text-neutral py-9 mx-auto'>
				Inicia sesión para vivir la emoción de tus torneos favoritos{' '}
			</p>

			<Field
				className='bg-secondary h-[64px] w-full rounded-xl px-4 my-3 mx-auto'
				type='email'
				id='email'
				name='email'
				placeholder='Email'
				required
			/>
			<div className='relative h-[64px] w-full my-3'>
				<Field
					className='bg-secondary w-full h-full rounded-xl px-4  '
					type={`${showPass ? 'text' : 'password'}`}
					id='password'
					name='password'
					placeholder='Contraseña'
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
			<div className={` ${submitOk?' w-[43px] h-[43px] m-auto rounded-full ':'w-full  text-base-100 text-[18px] font-SourceSansPro text-center font-medium rounded-2xl  cursor-pointer hover:scale-[102%] '} h-[43px] bg-accent flex justify-center items-center transition-all duration-1000`}>
					{submitOk?<FaCheck className=' w-[30px] h-[30px] text-base-100'/>:<input
					className='w-full h-full'
					value='Ingresar'
					type='submit'
				/>}
				</div>
				
			</div>

			<p className='mx-auto my-28 text-[16px] font-Roboto text-neutral'>
				¿Eres nuevo en SportPlay?{' '}
				<span
					className='text-success text-[16px] cursor-pointer'
					onClick={handleLogin}
				>
					Regístrate
				</span>
			</p>
		</Form>
		)}
			
		</Formik>
		
	);
};

export default FormLogIn;
