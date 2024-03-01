import { Link } from 'react-router-dom';
import { FaAngleDown } from 'react-icons/fa6';

function AdminTorneo() {
	const currentTournament = (
		<div className='z-[1] '>
			<div className='dropdown dropdown-end'>
				<div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
					<FaAngleDown />
				</div>
				<ul
					tabIndex={0}
					className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-secondary rounded-box w-52'
				>
					<li>
						<Link className='text-right block'>Compartir Administración</Link>
					</li>
					<li>
						<Link to={'/'} className='text-right block'>
							Administrar Equipos
						</Link>
					</li>
					<li>
						<Link className='text-right block'>Organizar Partidos</Link>
					</li>
					<li>
						<Link className='text-right block'>Cargar Resultados</Link>
					</li>
					<li className=''>
						<Link className='text-right block'>Notificaciones</Link>
					</li>
					<li>
						<Link className='text-warning text-right block   '>
							<div className='flex flex-row  items-center justify-end'>
								<img src='/icons/exit.svg' alt='' />
								<div className='ml-2'>Finalizar Torneo</div>
							</div>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
	const tournamentCancel = (
		<img src='/icons/iconCancel.svg' alt='icono de calcelar' />
	);
	const wonTournament = (
		<img src='/icons/trophyGreen.svg' alt='icono de calcelar' />
	);
	return (
		<div className='space-y-4'>
			<div className='m-auto w-[327px] md:w-[400px] space-y-4 text-neutral'>
				<div className='text-center'>
					<h1 className='text-[2rem] text-base-100 mb-8'>
						Administrador del Torneo
					</h1>
					<button
						type='button'
						className='bg-accent btn btn-sm border-accent text-base-100 '
					>
						Crear torneo
					</button>
				</div>
			</div>
			<div className='bg-[#545458] w-full h-[0.5px] mt-0'></div>
			<div className='m-auto w-[327px] md:w-[400px] space-y-4 text-neutral'>
				<h2>Torneos creados</h2>
				<div className='flex flex-row items-center justify-between bg-secondary h-[61px] p-4 rounded-[14px]'>
					<div className='flex flex-row gap-4 items-center '>
						<img
							src='/images/trophyAdminTournament.svg'
							alt='icono de trofeo'
							className=''
						/>
						<div className='w-full'>Copa las Condes</div>
					</div>
					{/* {currentTournament} */}
				</div>
			</div>
		</div>
	);
}

export default AdminTorneo;
