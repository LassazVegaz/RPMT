import { Student } from "../models/student.model";

const createStudent = async (student) => {
  const _student = new Student(student);
  await _student.save();
  return _student.toJSON();
};

const getStudents = async () => {
  const Students = await Student.find().populate("user");
  return Students.toJSON();
};

const getStudent = async (id) => {
  const Students = await Student.findById(id).populate();
  return Students.toJSON();
};

const updateStudent = async (id) => {
  const student = await Student.findById(id).populate();
  if (studentExists(id))
    throw new NotFoundException(`Student with id ${id} not found`);

  return student.update({
    where: {
      id,
    },
    data: student,
  });
};

const deleteStudent = async (id) => {
  const student = await Student.findById(id).populate();
  if (studentExists(id))
    throw new NotFoundException(`Student with id ${id} not found`);

  return student.delete({
    where: {
      id,
    },
  });
};

export const studentService = {
  createStudent,
  getStudents,
  getStudent,
  deleteStudent,
  updateStudent,
};
