import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
function CrearTorneo() {
	const optionsNumberTeams = ['4', '5', '6', '7', '8', '9', '10', '11', '12'];
	const initialValues = {
		tournamentName: '',
		typeTournament: '',
		numberTeams: '',
		numberPlayers: '',
	};
	const handleSubmit = async (values, { setSubmitting }) => {
		try {
			const data = JSON.stringify(values, null, 2);
			const response = await axios.post(
				'https://tournament-sport.onrender.com/api/tournament/create-tournament',
				data
			);

			console.log('Success:', response.data); // Handle successful response data
			document.getElementById('modal-crear-torneo').showModal();
			// Handle success here (e.g., display success message, redirect)
			setSubmitting(false); // Reset submitting state
		} catch (error) {
			console.error('Error:', error.response.data); // Handle error response

			// Handle errors here (e.g., display error message)
			setSubmitting(false); // Reset submitting state in case of error
		}
	};
	return (
		<div className='m-auto w-[327px] md:w-[400px] space-y-4 text-neutral'>
			<h2 className='text-[32px] md:text-[40px] text-base-100 text-center font-bold'>
				Torneo nuevo
			</h2>
			<div className='w-full flex flex-col  items-center'>
				<img
					src='/images/torneo-nuevo.svg'
					alt='imagen que representa al texto torneo nuevo'
					className='w-[144px] h-[144px]'
				/>
			</div>

			<Formik
				initialValues={initialValues}
				validate={values => {
					const errors = {};
					if (!values.tournamentName) {
						errors.tournamentName = 'Required';
					}
					if (!values.typeTournament) {
						errors.typeTournament = 'Required';
					}

					return errors;
				}}
				onSubmit={handleSubmit}
			>
				{({ isSubmitting }) => (
					<Form className='flex flex-col gap-4'>
						<Field
							type='text'
							name='tournamentName'
							className='bg-secondary h-[56px] w-full rounded-xl px-4'
							required
						/>
						<ErrorMessage name='tournamentName' component='div' />
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
									name='typeTournament'
									value='publico'
									className='ml-2'
								/>
							</label>
							<label>
								Privado
								<Field
									type='radio'
									name='typeTournament'
									value='privado'
									className='ml-2'
								/>
							</label>
						</div>
						<ErrorMessage name='typeTournament' component='div' />
						<div className='container'>
							<div className='grid sm:grid-cols-1 md:grid-cols-2 gap-4 '>
								<div>
									<label htmlFor='numberTeams'>Cantidad de Equipos</label>
									<Field
										as='select' // Use the "select" field type
										id='numberTeams' // Set an ID for accessibility
										name='numberTeams' // Match the form field name
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
									<ErrorMessage name='numberTeams' component='div' />
								</div>
								<div>
									<label htmlFor='numberPlayers'>Cantidad de Jugadores</label>
									<Field
										as='select' // Use the "select" field type
										id='numberPlayers' // Set an ID for accessibility
										name='numberPlayers' // Match the form field name
										//defaultValue='' // Set an initial empty value

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
									<ErrorMessage name='numberPlayers' component='div' />
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
					<button>close</button>
				</form>
			</dialog>
		</div>
	);
}

export default CrearTorneo;
