import express from "express";
import { studentService } from "../services/student.service";
import { usersService } from "../services/users.service";

const _router = express.Router();

// POST /
// Create a student
_router.post("/", async (req, res) => {
	try {
		req.body.role = "student";
		const user = await usersService.createUser(req.body);
		const student = await studentService.createStudent(user, req.body);
		res.json(student);
	} catch (error) {
		res.status(500).json({ message: error.message, error });
	}
});

// GET /
// get all students
_router.get("/", async (req, res) => {
	try {
		const students = await studentService.getStudents();
		res.json(students);
	} catch (error) {
		res.status(500).json({ message: error.message, error });
	}
});

// PUT /:id
// update a student
_router.put("/:id", async (req, res) => {
	try {
		const student = await studentService.updateStudent(
			req.params.id,
			req.body
		);
		res.json(student);
	} catch (error) {
		res.status(500).json({ message: error.message, error });
	}
});

// DELETE /:id/students
// remove a student from a group
_router.delete("/:id", async (req, res) => {
	try {
		const student = await studentService.deleteStudent(
			req.params.id,
			req.body
		);
		res.json(student);
	} catch (error) {
		res.status(500).json({ message: error.message, error });
	}
});

export const studentsRouter = _router;
