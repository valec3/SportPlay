import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ScoreBoard, CustomSelect, TableInput } from './components';

import './LoadResults.css';
import {
	getInfoTeamsByTournament,
	getInfoTournament,
	addGameStats,
} from '../../services';
const LoadResults = () => {
	const [options, setOptions] = useState([]);
	const [game, setGame] = useState(null);
	const { id: tournament_id } = useParams();
	const [infoTournament, setInfoTournament] = useState({});
	const [dataGame, setDataGame] = useState({
		home_team: {
			id: game?.home_team_id,
			score: 0,
			players: [],
		},
		away_team: {
			id: game?.away_team_id,
			score: 0,
			players: [],
		},
		game_id: game?.game_id,
	});
	
	useEffect(() => {
		const getTeams = async () => {
			const { data } = await getInfoTeamsByTournament(tournament_id);
			setOptions(data);
		};
		getTeams();
	}, [tournament_id]);
	useEffect(() => {
		const getInfo = async () => {
			const { data } = await getInfoTournament(tournament_id);
			setInfoTournament(data);
		};
		getInfo();
	}, [tournament_id]);
	const handleSubmitResults = () => {
		const data = {
			...dataGame,
			game_id: game.game_id,
			home_team: {
				...dataGame.home_team,
				id: game.home_team_id,
			},
			away_team: {
				...dataGame.away_team,
				id: game.away_team_id,
			},
		};
		addGameStats(data);
	};
	return (
		<section>
			<div className='w-full flex justify-center items-center gap-3 font-semibold py-2'>
				<img
					className='size-10 rounded-full object-contain'
					src={infoTournament.logo}	
					alt={`Logo del torneo ${infoTournament.name}`}
				/>
				<p className='text-[1.2rem]'>{infoTournament.name}</p>
			</div>
			<hr className='border-[#545458] my-[10px] ' />

			<h2 className='text-[2rem] font-bold mb-10 font-Roboto lg:text-center lg:text-2xl pt-8 pl-6'>Cargar Resultados</h2>
			<CustomSelect onChange={setGame} options={options} />
			{game !== null ? (
				<div className="">
					<ScoreBoard
						game={game}
						setDataGame={setDataGame}
						dataGame={dataGame}
					/>
					<p className='w-[90%] text-center mt-10 mb-6 mx-auto lg:w-[70%]'>
						Ingresa los detalles del partido: tarjetas, lesiones y goles por
						jugador para un seguimiento preciso
					</p>
					<TableInput
						game={game}
						dataGame={dataGame}
						setDataGame={setDataGame}
					/>
					<div className='w-full flex justify-center'>
						<button
							className='bg-[#51A331] rounded-[2rem] font-semibold text-white w-fit my-10 px-16 py-3'
							onClick={handleSubmitResults}
						>
							<span>Cargar Resultados</span>
						</button>
					</div>
				</div>
			) : (
				<div className='flex justify-center items-center h-[10rem]'>
					<p className='text-2xl'>No hay nada que mostrar</p>
				</div>
			)}
		</section>
	);
};

export default LoadResults;
