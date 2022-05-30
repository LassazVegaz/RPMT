import { User } from "../models/user.model";

const createUser = async (user) => {
	const _user = new User(user);
	await _user.save();
	return _user.toJSON();
};

export const usersService = {
	createUser,
};
