import axios from 'axios';
const URL_API = 'https://tournament-sport.onrender.com';

const api = axios.create({
	baseURL: URL_API,
});

export default api;
