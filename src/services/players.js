import api from './api';

export const getPlayersForTeam = async teamId => {
	const { data } = await api.get(`/players?teamId=${teamId}`);
	return data;
};
