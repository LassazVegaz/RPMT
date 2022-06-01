import axios from "axios";
import config from "../config.json";

const createAxiosApp = () => {
	const _axios = axios.create({
		baseURL: config.apiURL,
	});

	_axios.interceptors.response.use(null, (error) => {
		console.error(error);
		throw error;
	});

	return _axios;
};

export const axiosApp = createAxiosApp();
