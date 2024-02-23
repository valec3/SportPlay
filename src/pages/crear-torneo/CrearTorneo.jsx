import RadioButton from '../../components/common/RadioButton';

function CrearTorneo() {
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

			<form className='flex flex-col gap-4'>
				<input
					className='bg-secondary h-[56px] w-full rounded-xl px-4'
					type='text'
					id=''
					placeholder='Nombre del torneo'
					// value={}
					// onChange={}
					// onKeyUp={}
					required
				/>
				<div className='space-y-4'>
					<p className='text-neutral'>Tipo de torneo</p>
					<div className='form-control bg-secondary h-[56px] w-full rounded-xl px-4 flex flex-row justify-between'>
						<RadioButton
							label='Público'
							name='type-tournament'
							value='public'
							checked={false}
						/>
						<RadioButton
							label='Privado'
							name='type-tournament'
							value='private'
							checked={false}
						/>
					</div>
				</div>
				<div className='container'>
					<div className='grid sm:grid-cols-1 md:grid-cols-2 gap-4 '>
						<div>
							{/* <label htmlFor=''>Número de equipos</label> */}
							<select className='select select-bordered w-full   bg-secondary'>
								<option disabled selected>
									Cantidad de equipos
								</option>
								<option>Normal Apple</option>
								<option>Normal Orange</option>
								<option>Normal Tomato</option>
							</select>
						</div>
						<div>
							{/* <label htmlFor=''>Cantidad de jugadores</label> */}
							<select className='select select-bordered w-full   bg-secondary'>
								<option disabled selected>
									Cantidad de jugadores
								</option>
								<option>Normal Apple</option>
								<option>Normal Orange</option>
								<option>Normal Tomato</option>
							</select>
						</div>
					</div>
				</div>
				<button className='bg-accent btn btn-sm border-accent text-base-100 '>
					Crear torneo
				</button>
			</form>
		</div>
	);
}

export default CrearTorneo;
