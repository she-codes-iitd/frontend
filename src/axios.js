import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://she-codes-backend.herokuapp.com'
});

export default instance;

