import express from "express";
import dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT;
const app = express();

app.get("/", (_req, res) => {
	res.send("Hello World!");
});

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
