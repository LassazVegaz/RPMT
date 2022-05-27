import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import { dbService } from "./services/db.service";

dotenv.config();

const main = async () => {
	const port = process.env.PORT;
	const app = express();

	// add middlewares
	app.use(morgan("dev"));

	// connect to DB
	await dbService.connect();

	app.get("/", (_req, res) => {
		res.send("Hello World!");
	});

	app.listen(port, () => {
		console.log(`Server started on port ${port}`);
	});
};

main().catch((err) => {
	console.error("Error occured:", err);
});
