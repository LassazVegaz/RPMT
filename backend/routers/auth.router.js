import express from "express";
import { usersService } from "../services/users.service";
import { auth } from "../middleware/auth.middleware";

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

// GET: /
// get logged in user
_router.get("/", auth(), async (req, res) => {
	res.send(req.user);
});

export const authRouter = _router;
