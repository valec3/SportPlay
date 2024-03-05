import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import PeticionAllTournaments from '../../components/common/PeticionAllTournaments';
import { useLocation } from 'react-router-dom';

function AdministrarEquipos() {
	const { state } = useLocation();
	console.log('datos del torneo', state);
	PeticionAllTournaments();
	const allTeams = useSelector(state => state.allTeams.allTeams);
	console.log(allTeams);
	const userId = useSelector(state => state.userData.userData.id);
	const equiposDelTorneo = allTeams
		.filter(obj => obj.creator_id === userId)
		.slice(-15)
		.reverse();
	console.log('equiposDelTorneo', equiposDelTorneo);
	const userData = useSelector(state => state.userData.userData);
	const [imageUrl, setImageUrl] = useState('/images/torneo-nuevo.svg');

	const validate = values => {
		const errors = {};
		if (!values.name) {
			errors.name = 'Required name team';
		}
		if (!values.logo_url) {
			errors.logo_url = 'Required image logo';
		}

		return errors;
	};

	const handleImageChange = (e, setFieldValue) => {
		const file = e.currentTarget.files[0];

		if (file) {
			const reader = new FileReader();
			reader.onload = () => {
				const url = reader.result;
				setImageUrl(url);
			};
			reader.readAsDataURL(file);
			setFieldValue('logo_url', file);
		}
	};

	const handleSubmit = async (values, { setSubmitting }) => {
		try {
			var fileFormData = new FormData();
			fileFormData.append('name', values.name);
			fileFormData.append('logo_url', values.logo_url);
			fileFormData.append('creator_id', userData.id);
			console.log(fileFormData);
			const response = await axios.post(
				'https://tournament-sport.onrender.com/api/teams/create',
				fileFormData,
				{
					// Upload to server
					headers: {
						'Content-Type': 'multipart/form-data', // Set content type for file upload
					},
				}
			);

			console.log('Success:', response.data); // Handle successful response data

			// Handle success here (e.g., display success message, redirect)
			setSubmitting(false); // Reset submitting state
		} catch (error) {
			console.error('Error:', error.response.data); // Handle error response

			// Handle errors here (e.g., display error message)
			setSubmitting(false); // Reset submitting state in case of error
		}
	};

	return (
		<>
			<div className='m-auto w-[327px] md:w-[400px] text-neutral '>
				<div className='flex justify-center p-4'>
					<div className='flex flex-row items-center '>
						<img src={state.logo} alt='' className='mr-2 w-[20px] h-[20px]' />
						<h2 className='text-[20px] font-semibold'>{state.name}</h2>
					</div>
				</div>
			</div>
			<div className='bg-[#545458] w-full h-[0.5px] mt-0'></div>
			<div className='m-auto w-[327px] md:w-[400px] space-y-4 text-neutral '>
				<h1 className='font-bold text-[2rem] my-4'>Administrar Equipos</h1>
				<p className='font-bold my-4 text-[22px]'>Nuevo Equipo</p>
				<div className='flex justify-center'>
					<div className='w-[134px] h-[134px] flex  rounded-full z-[2] bg-neutral'>
						<img
							src={imageUrl}
							alt='logo tornep'
							className='mx-auto w-[134px] h-[134px] rounded-full z-0'
						/>
					</div>
				</div>

				<Formik
					initialValues={{
						name: '',
						logo_url: '',
					}}
					validate={validate}
					onSubmit={handleSubmit}
				>
					{({ isSubmitting, setFieldValue }) => (
						<Form className='flex flex-col gap-4 pb-4'>
							<input
								type='file'
								name='logo_url'
								onChange={e => handleImageChange(e, setFieldValue)}
								className='file-input bg-secondary h-[56px] w-full rounded-xl mt-5'
								required
							/>

							<ErrorMessage name='logo_url' component='div' />
							<Field
								type='text'
								name='name'
								className='bg-secondary h-[56px] w-full rounded-xl px-4'
								placeholder='Nombre del Equipo'
								required
							/>
							<ErrorMessage name='name' component='div' />
							<div className='flex justify-center m-4'>
								<button
									type='submit'
									className='bg-accent btn btn-sm border-accent text-base-100 w-[260px] '
									disabled={isSubmitting}
								>
									Agregar equipo
								</button>
							</div>
						</Form>
					)}
				</Formik>
			</div>
			<div className='bg-[#545458] w-full h-[0.5px] mt-0'></div>
			<div className='m-auto w-[327px] md:w-[400px] space-y-4 text-neutral '>
				<div className='flex flex-col gap-4 py-4'>
					<div className='flex flex-row justify-between py-4'>
						<div>Equipos :</div>
						<div className='text-warning'>{`Vacante: ${state.teams_count - equiposDelTorneo.length}`}</div>
					</div>
					{}
					{equiposDelTorneo.map((equipo, index) => {
						return (
							<div
								className='flex flex-row justify-between p-4 rounded-[14px] md:w-[355px] h-[61px] bg-secondary'
								key={index}
							>
								<div className='flex flex-row gap-4 w-[200px]'>
									<img src={equipo.logo_url} alt='icono de equipo' />
									<p>{equipo.name}</p>
								</div>
								<div className='flex flex-row gap-4'>
									<img
										src='/icons/add-member.svg'
										alt='icono agregar a un integrante'
									/>
									<img src='/icons/cancel-team.svg ' alt='icono cancelar' />
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default AdministrarEquipos;
