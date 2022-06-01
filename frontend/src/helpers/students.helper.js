import endpoints from "../end-points.json";
import { axiosApp } from "./axios-app";

const createStudent = async (student) => {
	const res = await axiosApp.post(endpoints.students.common, student);
	return res.data;
};

export const studentsHelper = {
	createStudent,
};
