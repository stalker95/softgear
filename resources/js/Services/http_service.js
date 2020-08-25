import axios from 'axios';
import store from '../store';

export function http() {
	return axios.create({
		baseUrl: store.state.baseUrl
	})
}

export function httpFile() {
	return axios.create({
		baseUrl: store.state.baseUrl,
		headers: {
			'Content-type': 'multipart/form-data'
		}
	})
}