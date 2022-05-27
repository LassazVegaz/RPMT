import dotenv from "dotenv";
import express from "express";
import { dbService } from "./services/db.service";

dotenv.config();

const main = async () => {
	const port = process.env.PORT;
	const app = express();

	// connect to DB
	await dbService.connect();

	app.get("/", (_req, res) => {
		res.send("Hello World!");
	});

	app.listen(port, () => {
		console.log(`Server started on port ${port}`);
	});
};

main();
