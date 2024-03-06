import api from './api';

export const getInfoTournament = async tournament_id => {
	const response = await api.get(`/tournament/info/${tournament_id}`);
	return response;
};
