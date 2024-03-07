import axios from 'axios';
const URL_API = 'https://tournament-sport.onrender.com/api';
// const URL_API = 'http://localhost:3100/api';

const api = axios.create({
	baseURL: URL_API,
});

export default api;
