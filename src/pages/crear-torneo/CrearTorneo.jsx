import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom/dist';

function CrearTorneo() {
	const optionsNumberTeams = ['4',  '8',  '16'];
	const optionsNumberPlayers = ['4', '5', '6', '7', '8', '9', '10', '11', '12'];
	const userData = useSelector((state) => state.userData.userData);
	const [fileImg, setFileImg] = useState();
	const [imageUrl, setImageUrl] = useState(null);
	const initialValues = {
		logo: '',
		creator_id: null,
		name: '',
		type_tournament: 0,
		teams_count: 0,
		players_count: 0,
	};
	const handleSubmit = async (values, { setSubmitting }) => {
		try {
			// const jsonString = JSON.stringify();
			// console.log(jsonString);
			console.log(fileImg);
			const file = new FormData();
			file.append('logo', fileImg)
			const data = {...values, creator_id: userData.id, logo: file}
			console.log(file);

			const response = await axios.post(
				'https://tournament-sport.onrender.com/api/tournament/create-tournament',
				data
			);

			console.log('Success:', response); // Handle successful response data
			document.getElementById('modal-crear-torneo').showModal();
			// Handle success here (e.g., display success message, redirect)
			setSubmitting(false); // Reset submitting state
		} catch (error) {
			console.error('Error:', error.response.data); // Handle error response

			// Handle errors here (e.g., display error message)
			setSubmitting(false); // Reset submitting state in case of error
		}
	};
	const handleImageChange = (e) =>{
			
			const file = (e.target.files[0]);
			setFileImg(file);
			const reader = new FileReader();		
			reader.onload = () => {
			  const url = reader.result;

			  setImageUrl(url);
			};
			if (file) {
			  reader.readAsDataURL(file);
			}  
	}

	return (
		<div className='m-auto w-[327px] md:w-[400px] space-y-4 text-neutral '>
			<h2 className='text-[22px] md:text-[32px] text-base-100 mt-1 text-center font-bold'>
				Torneo nuevo
			</h2>
			
			<div className=' flex flex-col bg-neutral relative mx-auto w-[134px] h-[134px] rounded-full'>
				<input 
					type="file" 
					className="file-input-ghost absolute w-[134px] h-[134px] rounded-full opacity-100"
					onChange={handleImageChange}
				/>
				<div className='w-[134px] h-[134px] flex items-center'>
					<img
						src={`${imageUrl?imageUrl:'/images/torneo-nuevo.svg'} `}
						alt='logo tornep'
						className='mx-auto'
					/>
				</div>
				
			</div>

			<Formik
				initialValues={initialValues}
				
				validate={values => {
					const errors = {};
					if (!values.name) {
						errors.name = 'Required';
					}
					if (!values.type_tournament) {
						errors.type_tournament = 'Required';
					}

					return errors;
				}}
				onSubmit={handleSubmit}
				className=''
			>
				{({ isSubmitting }) => (
					<Form className='flex flex-col gap-4 pb-4'>
						<Field
							type='text'
							name='name'
							className='bg-secondary h-[56px] w-full rounded-xl px-4'
							placeholder='Nombre del Torneo'
							required
						/>
						<ErrorMessage name='name' component='div' />
						<p className='text-neutral'>Tipo de torneo</p>
						<div
							role='group'
							aria-labelledby='my-radio-group'
							className='form-control bg-secondary h-[56px] w-full rounded-xl px-4 flex flex-row justify-between items-center'
							required
						>
							<label>
								Público
								<Field
									type='radio'
									name='type_tournament'
									value='0'
									className='ml-2'
								/>
							</label>
							<label>
								Privado
								<Field
									type='radio'
									name='type_tournament'
									value='1'
									className='ml-2'
								/>
							</label>
						</div>
						<ErrorMessage name='type_tournament' component='div' />
						<div className='container'>
							<div className='grid sm:grid-cols-1 md:grid-cols-2 gap-4 '>
								<div>
									<label htmlFor='teams_count'>Cantidad de Equipos</label>
									<Field
										as='select' // Use the "select" field type
										id='numberTeams' // Set an ID for accessibility
										name='teams_count' // Match the form field name
										//defaultValue='0' // Set an initial empty value
										className='select select-bordered w-full   bg-secondary'
										required
									>
										<option value=''>-- Selecciona una opción --</option>
										{optionsNumberTeams.map((option, index) => (
											<option key={index} value={option}>
												{option}
											</option>
										))}
									</Field>
									<ErrorMessage name='teams_count' component='div' />
								</div>
								<div>
									<label htmlFor='players_count'>Cantidad de Jugadores</label>
									<Field
										as='select' // Use the "select" field type
										id='players_count' // Set an ID for accessibility
										name='players_count' // Match the form field name
										//defaultValue='' // Set an initial empty value

										className='select select-bordered w-full   bg-secondary'
										required
									>
										<option value=''>-- Selecciona una opción --</option>
										{optionsNumberPlayers.map((option, index) => (
											<option key={index} value={option}>
												{option}
											</option>
										))}
									</Field>
									<ErrorMessage name='players_count' component='div' />
								</div>
							</div>
						</div>
						<button
							type='submit'
							className='bg-accent btn btn-sm border-accent text-base-100 '
							disabled={isSubmitting}
						>
							Crear torneo
						</button>
					</Form>
				)}
			</Formik>

			{/* Open the modal using document.getElementById('ID').showModal() method */}

			<dialog id='modal-crear-torneo' className='modal px-6'>
				<div className='modal-box flex flex-col items-center'>
					<img src='/images/trophy.svg' alt='es una imagen de trofeo' />
					<h3 className='text-accent text-[2rem] font-bold'>Fantastico!</h3>
					<p className='text-secondary font-semibold text-[24px] text-center'>
						Tu torneo ha sido creado con éxito
					</p>
				</div>
				<form method='dialog' className='modal-backdrop'>
					<Link to='/administrar-torneo' className='bg-black'>close</Link>
				</form>
			</dialog>
		</div>
	);
}

export default CrearTorneo;
