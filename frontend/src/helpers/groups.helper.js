import endpoints from "../end-points.json";
import { axiosApp } from "./axios-app";

const createGroup = async (group) => {
	const res = await axiosApp.post(endpoints.groups.common, group);
	return res.data;
};

const getGroup = async (id) => {
	const res = await axiosApp.get(`${endpoints.groups.common}/${id}`);
	return res.data;
};

export const groupsHelper = {
	createGroup,
	getGroup,
};
