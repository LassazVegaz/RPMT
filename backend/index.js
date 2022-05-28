import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import { markingSchemasRouter } from "./routers/marking-schemas.router";
import { dbService } from "./services/db.service";

dotenv.config();

const main = async () => {
	const port = process.env.PORT;
	const app = express();

	// add middlewares
	app.use(morgan("dev"));
	app.use(bodyParser.json());

	// connect to DB
	await dbService.connect();

	// add routers
	app.use("/marking_schemas", markingSchemasRouter);

	app.listen(port, () => {
		console.log(`Server started on port ${port}`);
	});
};

main().catch((err) => {
	console.error("Error occured:", err);
});
