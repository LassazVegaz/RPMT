import express from "express";
import { usersService } from "../services/users.service";

const _router = express.Router();

// GET /email_available/:email
// Checks if the email is available
_router.get("/email_available/:email", async (req, res) => {
	try {
		const email = req.params.email;
		const available = await usersService.emailAvailable(email);
		res.json({ available });
	} catch (error) {
		res.status(500).json({ message: error.message, error });
	}
});

export const usersRouter = _router;
