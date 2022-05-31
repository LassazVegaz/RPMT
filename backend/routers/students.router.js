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

export const studentsRouter = _router;
