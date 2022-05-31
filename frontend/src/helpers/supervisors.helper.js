import endpoints from "../end-points.json";
import { axiosApp } from "./axios-app";

const createSupervisor = async (supervisor) => {
	const response = await axiosApp.post(
		endpoints.supervisors.common,
		supervisor
	);
	return response.data;
};

export const supervisorHelpers = {
	createSupervisor,
};
