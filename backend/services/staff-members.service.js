import { StaffMember } from "../models/staff-member.model";

const createStaffMember = async (user, staffMember) => {
	staffMember.userId = user.id;

	const _staffMember = new StaffMember(staffMember);
	await _staffMember.save();
	return _staffMember.toJSON();
};

export const staffMembersService = {
	createStaffMember,
};
