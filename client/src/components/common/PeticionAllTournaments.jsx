import React from 'react';
import { useDispatch } from 'react-redux';
import { getTournaments } from '../../redux/featuresSlice/tournamentSlice';
import axios from 'axios';
import { useEffect } from 'react';
import { getTeams } from '../../redux/featuresSlice/teamSlice';

const PeticionAllTournaments = () => {
	const dispatch = useDispatch();
	const apiURL =
		'https://tournament-sport.onrender.com/api/tournament/all-tournaments';
	const apiTeamsURL = 'https://tournament-sport.onrender.com/api/teams/list';
	

	useEffect(() => {
		const fetchDataTournaments = async () => {
			try {
				const res = await axios.get(apiURL);
				// console.log('fetchDataTournaments', res.data);
				dispatch(getTournaments(res.data));
			} catch (er) {
				console.log(er);
			}
		};
		const fetchDataTeams = async () => {
			try {
				const res = await axios.get(apiTeamsURL);
				// console.log('fetchDataTeams', res.data);
				dispatch(getTeams(res.data));
			} catch (er) {
				console.log(er);
			}
		};
		fetchDataTeams();
		fetchDataTournaments();
	}, []);
	return null;
};

export default PeticionAllTournaments;
