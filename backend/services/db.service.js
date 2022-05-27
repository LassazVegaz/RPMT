import mongoose from "mongoose";

const connect = async () => {
	const connectionStr = process.env.DB_CONNECTION_STRING;
	await mongoose.connect(connectionStr);
};

export const dbService = {
	connect,
};
