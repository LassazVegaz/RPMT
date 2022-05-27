import mongoose from "mongoose";

const connect = async () => {
	const connectionStr = process.env.DB_CONNECTION_STRING;
	await mongoose.connect(connectionStr);
	console.log("Connected to DB: ", connectionStr);
};

export const dbService = {
	connect,
};
