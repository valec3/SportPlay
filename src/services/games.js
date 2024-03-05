import api from './api';

export const getDataGameById = async game_id => {
	const response = await api.get(`/games/data/${game_id}`);
	return response.data;
};

export const getDataGameForTournament = async tournament_id => {
	const response = await api.get(`/games/data/tournament/${tournament_id}`);
	return response.data;
};

export const getGamesByTeam = async team_id => {
	const response = await api.get(`/games/team/${team_id}`);
	return response.data;
};

export const addGameStats = async gameStats => {
	const response = await api.post('/games/add', gameStats);
	return response.data;
};
