import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { useState } from 'react';
import { FaEye, FaEyeSlash, FaCheck } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { initiaSesion } from '../../redux/featuresSlice/registerSlice';
import { closeModal } from '../../redux/featuresSlice/modalSlice';
import { changeData } from '../../redux/featuresSlice/userSlice';

const FormSignIn = ({ handleLogin }) => {
	const [showPass, setShowPass] = useState(false);
	const [submitOk, setSubmitOk] = useState(false);

	const dispatch = useDispatch();

	const handleEyeSlash = () => {
		setShowPass(!showPass);
	};
	const IconClaseName = 'text-neutral absolute top-[18px] right-[15px]';

	const expRegName = /^[a-zA-Z\u00C0-\u00FF\s]+$/;
	const expRegID = /^\d{6,12}$/;
	const expRegPass = /^\d{4,8}$/;
	const expRegEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	const submitForm = (values, { resetForm }) => {
		axios
			.post('https://tournament-sport.onrender.com/api/auth/register', values)
			.then(res => {
				//console.log(res.data);

				setTimeout(() => {
					setSubmitOk(false);
					resetForm();
					dispatch(initiaSesion());
					dispatch(changeData(values));
					dispatch(closeModal());
				}, 1000);
			})
			.catch(er => {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Hubo un error',
					footer: '<a href="#">Por favor vuelve a intentarlo.</a>',
				});
				console.log(er);
				setSubmitOk(false);
			});
	};

	return (
		<Formik
			initialValues={{
				first_name: '',
				last_name: '',
				dni: '',
				email: '',
				password: '',
			}}
			onSubmit={(values, { resetForm }) => {
				submitForm(values, { resetForm });
				setSubmitOk(true);
			}}
			validate={values => {
				let errors = {};
				if (!values.first_name) {
					errors.first_name = 'Por favor ingresa un nombre';
				} else if (!expRegName.test(values.first_name)) {
					errors.first_name = 'El nombre solo puede contener letras y espacios';
				}

				if (!values.last_name) {
					errors.last_name = 'Por favor ingresa tu apellido';
				} else if (!expRegName.test(values.last_name)) {
					errors.last_name =
						'El apellido solo puede contener letras y espacios';
				}

				if (!values.dni) {
					errors.dni = 'Por favor ingresa tu DNI';
				} else if (!expRegID.test(values.dni)) {
					errors.dni = 'El DNI solo puede contener números';
				}

				if (!values.email) {
					errors.email = 'Por favor ingresa tu email';
				} else if (!expRegEmail.test(values.email)) {
					errors.email = 'El formato de email es incorrecto';
				}

				if (!values.password) {
					errors.password = true;
				} else if (!expRegPass.test(values.password)) {
					errors.password = true;
				}
				return errors;
			}}
		>
			{({ touched, errors }) => (
				<Form className='w-full sticky top-0 flex flex-col px-[30px] bg-primary'>
					<h1 className='text-[22px] font-Roboto font-medium text-left text-base-100 py-2'>
						¿No tienes cuenta?
					</h1>
					<p className='text-[16px] font-SourceSansPro font-normal text-neutral py-[15px]'>
						Regístrate y sumérgete en el mundo de los torneos deportivos
					</p>
					<Field
						className='bg-secondary h-[50px] w-full rounded-xl px-4 my-3'
						type='text'
						id='first_name'
						name='first_name'
						placeholder='Ingresa tu Nombre'
						required
					/>
					<ErrorMessage
						name='first_name'
						component={() => (
							<div className='text-[12px] text-warning font-Roboto mx-auto'>
								{errors.first_name}
							</div>
						)}
					/>
					<Field
						className='bg-secondary h-[50px] w-full rounded-xl px-4 my-3'
						type='text'
						id='last_name'
						name='last_name'
						placeholder='Ingresa tu Apellido'
						required
					/>
					<ErrorMessage
						name='last_name'
						component={() => (
							<div className='text-[12px] text-warning font-Roboto mx-auto'>
								{errors.last_name}
							</div>
						)}
					/>
					<Field
						className='bg-secondary h-[50px] w-full rounded-xl px-4 my-3'
						type='text'
						id='dni'
						name='dni'
						placeholder='Ingresa tu DNI'
						required
					/>
					<ErrorMessage
						name='dni'
						component={() => (
							<div className='text-[12px] text-warning font-Roboto mx-auto'>
								{errors.dni}
							</div>
						)}
					/>
					<Field
						className='bg-secondary h-[50px] w-full rounded-xl px-4 my-3'
						type='email'
						id='email'
						name='email'
						placeholder='Email'
						required
					/>
					<ErrorMessage
						name='email'
						component={() => (
							<div className='text-[12px] text-warning font-Roboto mx-auto'>
								{errors.email}
							</div>
						)}
					/>

					<div className='relative h-[50px] w-full my-3'>
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
					<p
						className={` ${errors.password && touched.password ? 'text-warning' : 'text-neutral'} text-[12px] font-Roboto mx-auto`}
					>
						* La contraseña debe contener entre 4 y 8 digital.
					</p>
					<div className='p-[30px] mt-5'>
						<div
							className={` ${submitOk ? ' w-[43px] h-[43px] m-auto rounded-full ' : 'w-full  text-base-100 text-[18px] font-SourceSansPro text-center font-medium rounded-2xl  cursor-pointer hover:scale-[102%] '} h-[43px] bg-accent flex justify-center items-center transition-all duration-1000`}
						>
							{submitOk ? (
								<FaCheck className=' w-[30px] h-[30px] text-base-100' />
							) : (
								<input
									className='w-full h-full'
									value='Registrarme'
									type='submit'
								/>
							)}
						</div>
					</div>
					<div className='mx-auto my-5'>
						<p className='text-[14px] font-Roboto text-neutral mx-auto'>
							¿Ya tienes cuenta en SportPlay?{' '}
							<span
								className='text-success text-[14px] cursor-pointer'
								onClick={handleLogin}
							>
								Inicia Sesión
							</span>
						</p>
					</div>
				</Form>
			)}
		</Formik>
	);
};

export default FormSignIn;
