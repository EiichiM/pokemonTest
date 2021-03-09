import axios from 'axios'

const baseURL = ' https://pokeapi.co/api/v2/'

export const apiCall = (url, data, headers, method) => {
	axios({ method, url: baseURL + url, data, headers })
};