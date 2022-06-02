import axios from "axios";
import { authHelper } from "./auth.helper";
import config from "../config.json";

const createAxiosApp = () => {
	const _axios = axios.create({
		baseURL: config.apiURL,
	});

	// add auth token to request header
	_axios.interceptors.request.use(
		(config) => {
			const token = authHelper.getToken();
			if (token) {
				config.headers.Authorization = `Bearer ${token}`;
			}
			return config;
		},
		(error) => Promise.reject(error)
	);

	_axios.interceptors.response.use(null, (error) => {
		console.error(error);
		throw error;
	});

	return _axios;
};

export const axiosApp = createAxiosApp();
