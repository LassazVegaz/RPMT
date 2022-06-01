import { Student } from "../models/student.model";
import { mediaServices } from "./media.service";

const createStudent = async (user, student) => {
	if (student.photo) {
		student.photo = await mediaServices.saveProfilePicture(
			student.photo.data,
			student.photo.fileExtension
		);
	}

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
	return Student.find().populate("user", "_id email role").exec();
};

const getStudent = async (id) => {
	const Students = await Student.findById(id).populate(
		"user",
		"_id email role"
	);
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

	await Student.findOneAndUpdate(
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

	await Student.findByIdAndDelete(id);
};

const assignGroup = async (studentId, groupId) => {
	await Student.findByIdAndUpdate(studentId, {
		groupId,
	});
	return getStudent(studentId);
};

export const studentService = {
	createStudent,
	getStudents,
	getStudent,
	deleteStudent,
	updateStudent,
	assignGroup,
};
