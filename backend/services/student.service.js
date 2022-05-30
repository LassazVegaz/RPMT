import { Student } from "../models/student.model";

const createStudent = async (user, student) => {
	student = {
		userId: user.id,
		firstName: student.firstName,
		lastName: student.lastName,
		gender: student.gender,
		phone: student.phone,
		photo: student.photo,
	};

	const _student = new Student(student);
	await _student.save();

	return getStudent(_student.id);
};

const getStudents = async () => {
	return Student.find().populate("user").exec();
};

const getStudent = async (id) => {
	const Students = await Student.findById(id).populate("user");
	return Students.toJSON();
};

const updateStudent = async (id, data) => {
	data = {
		firstName: data.firstName,
		lastName: data.lastName,
		gender: data.gender,
		phone: data.phone,
		photo: data.photo,
	};

	const student = await Student.findById(id);
	if (!Boolean(student)) throw new Error(`Student with id ${id} not found`);

	await student.findOneAndUpdate(
		{
			id,
		},
		data
	);

	return getStudent(id);
};

const deleteStudent = async (id) => {
	const student = await Student.findById(id);
	if (!Boolean(student)) throw new Error(`Student with id ${id} not found`);

	await student.findByIdAndDelete(id);
};

export const studentService = {
	createStudent,
	getStudents,
	getStudent,
	deleteStudent,
	updateStudent,
};
