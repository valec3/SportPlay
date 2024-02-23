import { Link } from 'react-router-dom';

export default function Activity() {
	return (
		<section className='pt-[108px] pb-[119px] bg-primary'>
			<div className='px-[30px]'>
				<h1 className=' text-base-100 font-Roboto font-bold text-[32px]'>
					Actividad
				</h1>

				<div className=' flex justify-between mt-[43px]'>
					<h2 className='font-bold text-base-100 text-[22px] font-Roboto leading-[24.53px] tracking-[0.263px]'>
						Torneos Activos
					</h2>
					<span className='font-bold text-success font-Roboto'>
						Crear Torneo
					</span>
				</div>
			</div>

			<div className=' px-[30px]'>
				<div className='w-full mt-[33px] bg-secondary px-5 flex items-center justify-between py-[13px] rounded-[14px]'>
					<div className='flex items-center gap-[6px]'>
						<img src='images/cup.png' alt='Cup' />
						<span className='text-xl font-semibold text-base-100 font-SourceSansPro'>
							Torneo “A”
						</span>
					</div>
					<span className=' text-ternary font-SourceSansPro leading-[19.2px]'>
						Pendiente
					</span>
				</div>
			</div>

			<img className=' mt-[102px]' src='images/divider.svg' alt='Divider' />

			<div className='px-[30px] mt-[56.89px]'>
				<h3 className=' font-Roboto text-base-100 font-medium text-[22px] leading-[24.53px] tracking-[0.263px]'>
					Próximo Encuentro
				</h3>
				<p className=' mt-[61px] text-center text-warning font-Roboto text-xl'>
					Los partidos aún no tienen fecha de planificación. Mantente atento
					para futuras actualizaciones
				</p>
			</div>
		</section>
	);
}
