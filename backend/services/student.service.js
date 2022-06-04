import { Group } from '../models/group.model';
import { Student } from "../models/student.model";
import { mediaServices } from "./media.service";
import { supervisorsService } from './supervisors.service';

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

const getStudentByUserId = async (userId) => {
	const student = await Student.findOne({
		userId,
	}).populate("user", "_id email role");
	return student?.toJSON();
};

const getProjectId = async (studentId) => {
	const student = await Student.findById(studentId).populate("group");
	return student?.group?.projectId;
};

const getSupervisorFeedback = async () => {
	const groups = await Group.find().populate("project").exec();

	const _groups = groups.map((group) => {
		const _group = group.toJSON();
		const res = {
			id: _group.id,
		}
		_group.project = _group.project.toJSON();

		if (_group.project) {
			res.topic = _group.project.topic;
		} else {
			res.topic = null;
		}

		if (_group.project?.supervisorId?.id) {
			const sup = await supervisorsService.getSupervisor(_group.project.supervisorId.id)
			res.supervisor = `${sup.staffMember.firstName} ${sup.staffMember.lastName}`
			res.status = _group.project.supervisorId.status;
		} else {
			res.supervisor = null;
		}

		return res;
	})

	return _groups;
};

export const studentService = {
	createStudent,
	getStudents,
	getStudent,
	deleteStudent,
	updateStudent,
	assignGroup,
	getStudentByUserId,
	getProjectId,
	getSupervisorFeedback,
};
