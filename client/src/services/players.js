import api from './api';

export const getPlayersForTeam = async teamId => {
	const { data } = await api.get(`/players/list/${teamId}`);
	return data;
};
export const getPlayersForTeamInGame = async gameId => {
	const { data } = await api.get(`/players/game/${gameId}`);
	return data;
};
