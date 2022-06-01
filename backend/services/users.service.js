import { User } from "../models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createUser = async (user) => {
	user = {
		email: user.email,
		password: user.password,
		role: user.role,
	};

	const salts = Number(process.env.SALT_ROUNDS);
	user.password = await bcrypt.hash(user.password, salts);

	const _user = new User(user);
	await _user.save();
	return _user.toJSON();
};

const changePassword = async (userId, password) => {
	const salts = Number(process.env.SALT_ROUNDS);
	password = await bcrypt.hash(password, salts);
	await User.findByIdAndUpdate(userId, { password });
};

const deleteUser = async (id) => {
	await User.findByIdAndDelete(id);
};

const emailAvailable = async (email) => {
	const user = await User.findOne({ email });
	return !Boolean(user);
};

const validateUser = async (email, password) => {
	const user = await User.findOne({ email });
	if (!user) return false;
	return await bcrypt.compare(password, user.password);
};

const generateToken = async (email) => {
	const user = await User.findOne({ email });
	return jwt.sign({ sub: user.id, role: user.role }, process.env.JWT_SECRET);
};

export const usersService = {
	createUser,
	changePassword,
	deleteUser,
	emailAvailable,
	validateUser,
	generateToken,
};
