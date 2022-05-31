import axios from "axios";
import config from "../config.json";

const createAxiosApp = () => {
	const _axios = axios.create({
		baseURL: config.apiURL,
	});

	return _axios;
};

export const axiosApp = createAxiosApp();
