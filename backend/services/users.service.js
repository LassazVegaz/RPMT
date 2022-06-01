import { User } from "../models/user.model";

const createUser = async (user) => {
	user = {
		email: user.email,
		password: user.password,
		role: user.role,
	};

	const _user = new User(user);
	await _user.save();
	return _user.toJSON();
};

const changePassword = async (userId, password) => {
	await User.findByIdAndUpdate(userId, { password });
};

const deleteUser = async (id) => {
	await User.findByIdAndDelete(id);
};

const emailAvailable = async (email) => {
	const user = await User.findOne({ email });
	return !Boolean(user);
};

export const usersService = {
	createUser,
	changePassword,
	deleteUser,
	emailAvailable,
};
