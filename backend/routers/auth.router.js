import express from "express";
import { usersService } from "../services/users.service";

const _router = express.Router();

// POST: /login
// login user
_router.post("/login", async (req, res) => {
	const { email, password } = req.body;
	const valid = await usersService.validateUser(email, password);
	if (!valid) {
		res.status(401).send();
	} else {
		const token = await usersService.generateToken(email);
		res.status(200).send(token);
	}
});

export const authRouter = _router;
