import { useDispatch } from 'react-redux';
import { getStatsTournament } from '../../redux/featuresSlice/statsTournamentSlice';
import axios from 'axios';
import { useEffect } from 'react';


const PeticionStatsTournament = (tournament_id) => {
	const dispatch = useDispatch();
	const statsTournamentURL = `https://tournament-sport.onrender.com/api/tournament/stats-tournament-team/${tournament_id}`

	useEffect(() => {
		const fetchStatsTournaments = async () => {
			try {
				const res = await axios.get(statsTournamentURL);
				console.log('fetchStatsTournaments', res);
				dispatch(getStatsTournament(res.data));
			} catch (er) {
				console.log(er);
			}
		};
		
		fetchStatsTournaments();
	}, []);
	return null;
};

export default PeticionStatsTournament;