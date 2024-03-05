import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CustomSelect from './components/CustomSelect';
import './LoadResults.css';
const LoadResults = () => {
	const id = useParams();
	useEffect(() => {
		console.log(id);
	}, [id]);
	return (
		<section className='px-6 md:px-9'>
			<div className='flex gap-2'>
				<img className='' src='' alt='' />
				<p className='text-[1.2rem]'>Copa Americas</p>
			</div>
			<h2 className='text-[2rem] font-bold mb-10'>Cargar Resultados</h2>
			<CustomSelect />
			<div className='bg-secondary p-4 py-5 rounded-lg mt-10'>
				<h3 className='text-2xl mb-8 text-center font-bold'>
					Grupo &quot;A&quot;
				</h3>
				<div className=' flex items-start justify-center gap-6'>
					<div className='flex flex-col gap-2 items-center'>
						<img className='size-12 rounded-full' src='' alt='' />
						<p>Argentina</p>
					</div>
					<div className='flex items-center gap-3'>
						<input
							defaultValue={0}
							type='number'
							className='appearance-none text-center font-bold text-2xl bg-primary size-12 px-2'
						/>
						<p className='text-[2rem]'>:</p>
						<input
							defaultValue={0}
							type='number'
							className='appearance-none text-center font-bold text-2xl bg-primary size-12 px-2'
						/>
					</div>
					<div className='flex flex-col gap-2 items-center'>
						<img className='size-12 rounded-full' src='' alt='' />
						<p className='text-ellipsis'>Brasil</p>
					</div>
				</div>
			</div>
			<p className='mt-10 mb-6'>
				Ingresa los detalles del partido: tarjetas, lesiones y goles por jugador
				para un seguimiento preciso
			</p>
			<table className='w-full'>
				<thead>
					<tr>
						<th className='text-left text-red-400'>Equipo A</th>
						<th className='text-center'>TA</th>
						<th className='text-center'>TR</th>
						<th className='text-center'>L</th>
						<th className='text-center'>Gl</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Julio diaz</td>
						<td className='py-2 text-center'>
							<input
								type='number'
								defaultValue={0}
								className='size-8 bg-transparent text-center text-white border-[1px] border-white'
							/>
						</td>
						<td className='py-2 text-center'>
							<input
								type='number'
								defaultValue={0}
								className='size-8 bg-transparent text-center text-white border-[1px] border-white'
							/>
						</td>
						<td className='py-2 text-center'>
							<input
								type='number'
								defaultValue={0}
								className='size-8 bg-transparent text-center text-white border-[1px] border-white'
							/>
						</td>
						<td className='py-2 text-center'>
							<input
								type='number'
								defaultValue={0}
								className='size-8 bg-transparent text-center text-white border-[1px] border-white'
							/>
						</td>
					</tr>
					<tr>
						<td>Cristiano Ronaldo</td>
						<td className='py-2 text-center'>
							<input
								type='number'
								defaultValue={0}
								className='size-8 bg-transparent text-center text-white border-[1px] border-white'
							/>
						</td>
						<td className='py-2 text-center'>
							<input
								type='number'
								defaultValue={0}
								className='size-8 bg-transparent text-center text-white border-[1px] border-white'
							/>
						</td>
						<td className='py-2 text-center'>
							<input
								type='number'
								defaultValue={0}
								className='size-8 bg-transparent text-center text-white border-[1px] border-white'
							/>
						</td>
						<td className='py-2 text-center'>
							<input
								type='number'
								defaultValue={0}
								className='size-8 bg-transparent text-center text-white border-[1px] border-white'
							/>
						</td>
					</tr>
				</tbody>
			</table>
			<div className='w-full flex justify-center'>
				<button className='bg-[#51A331] rounded-[2rem] font-semibold text-white w-fit my-10 px-16 py-3'>
					<span>Cargar Resultados</span>
				</button>
			</div>
		</section>
	);
};

export default LoadResults;
