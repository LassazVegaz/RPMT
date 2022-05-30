import { StaffMember } from "../models/staff-member.model";

const createStaffMember = async (user, staffMember) => {
	staffMember = {
		userId: user.id,
		firstName: staffMember.firstName,
		lastName: staffMember.lastName,
		gender: staffMember.gender,
		phone: staffMember.phone,
		photo: staffMember.photo,
	};

	const _staffMember = new StaffMember(staffMember);
	await _staffMember.save();
	return _staffMember.toJSON();
};

export const staffMembersService = {
	createStaffMember,
};
