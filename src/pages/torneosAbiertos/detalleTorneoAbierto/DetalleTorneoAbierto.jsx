import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import trophy from '../../../../public/icons/trophy.png'

const DetalleTorneoAbierto = () => {
	const params = useParams()
	const navigate = useNavigate();
	const allTournaments = useSelector((state) => state.allTournaments.allTournaments);
	const allTeams = useSelector((state) => state.allTeams.allTeams);
	const [showModal, setShowModal] = useState(false);
	const modalRef = useRef(null);

	useEffect(() => {	
		window.scrollTo({
		  top:0,
		  behavior:'smooth'
		})	
	}, []);

	const handleButtonClick = () => {
		setShowModal(true);
	};

	const closeModal = () => {
		setShowModal(false);
	};
	const tournament = allTournaments.find((e)=>e.id==params.id)

	const handleOutsideClick = event => {
		if (modalRef.current && !modalRef.current.contains(event.target)) {
			setShowModal(false);
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleOutsideClick, true);
		return () => {
			document.removeEventListener('click', handleOutsideClick, true);
		};
	}, []);

	const Modal = ({ onClose }) => (
		<div className='fixed top-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center'>
			<div
				ref={modalRef}
				className='bg-white p-6 rounded-lg w-[80%] h-[200px] md:w-[50%] xl:w-[30%] 2xl:w-[20%]  flex flex-col justify-center'
			>
				<h2 className='text-2xl text-center text-accent font-bold mb-4'>
					¡Éxito!
				</h2>
				<p className='text-secondary text-center'>
					¡Tu solicitud para unirte al equipo ha sido enviada. Pronto recibirás
					una respuesta!
				</p>
			</div>
		</div>
	);

	return (
		<div className='bg-primary w-full flex flex-col justify-center items-center'>
			<button
				onClick={() => {
					navigate('/TorneosAbiertos');
				}}
				className='bg-primary w-full overflow-hidden px-[30px] flex justify-center items-center'
			>
				<div className='rounded-full bg-neutral w-[40px] h-[40px]  flex justify-center items-center'>
					<img
						className={`${tournament.logo==null||tournament.logo==''?'w-[25px] h-[25px]':'p-0.5 w-[40px] h-[40px] rounded-full'}`}
						src={tournament.logo==null||tournament.logo==''?trophy:tournament.logo}
						alt='logo'
					/>
				</div>
				<div className='text-left py-4 ml-4'>
					<h1 className='text-SorceSansPro font-semibold text-[20px]'>{tournament.name}</h1>
				</div>
			</button>

			<div className='bg-[#545458] w-full h-[0.5px] mt-0'></div>

			{allTeams.map((team)=>(
			<button
			key={team.id}
				className='bg-secondary w-11/12 md:w-4/5 lg:w-3/5 xl:w-2/5 rounded-2xl overflow-hidden drop-shadow-[3px_3px_2px_rgba(0,0,0,0.5)] mt-8 flex justify-between items-center mb-2 px-6 py-2'
				onClick={handleButtonClick}
			>
				<div className='flex justify-center items-center'>
					<div className='rounded-full bg-neutral w-[40px] h-[40px] ml-1 flex justify-center items-center'>
					<img
						className={`${team.logo_url == null || team.logo_url == '' ? 'w-[25px] h-[25px]' : 'p-0.5 w-[40px] h-[40px] rounded-full'}`}
						src={team.logo_url == null || team.logo_url == '' ? 'icons/trophy.png' : team.logo_url}
						alt='Real Madrid'
					/>
					</div>

					<div className='text-left py-4 ml-2'>
						<h1 className='text-SorceSansPro font-regular text-s'>
							{team.name}{' '}
							
						</h1>
					</div>
				</div>
				<div>				
					<span className='text-success ml-16 md:ml-16'>Unirme</span>
				</div>
			</button>
			))}

			

		

			

			

			{showModal && <Modal onClose={closeModal} />}
		</div>
		
	);
};

export default DetalleTorneoAbierto;
