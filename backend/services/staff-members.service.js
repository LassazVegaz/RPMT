import { StaffMember } from "../models/staff-member.model";
import { mediaServices } from "./media.service";

const createStaffMember = async (user, staffMember) => {
	if (staffMember.photo) {
		staffMember.photo = await mediaServices.saveProfilePicture(
			staffMember.photo.data,
			staffMember.photo.fileExtension
		);
	}

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

	return getStaffMember(_staffMember.id);
};

const deleteStaffMember = async (id) => {
	await StaffMember.findByIdAndDelete(id);
};

const updateStaffMember = async (id, staffMember) => {
	const existingMember = await StaffMember.findById(id);

	if (staffMember.firstName) existingMember.firstName = staffMember.firstName;
	if (staffMember.lastName) existingMember.lastName = staffMember.lastName;
	if (staffMember.phone) existingMember.phone = staffMember.phone;

	await existingMember.save();

	return getStaffMember(id);
};

const updatePhoto = async (id, photo) => {
	const existingMember = await StaffMember.findById(id);
	existingMember.photo = photo;
	await existingMember.save();

	return getStaffMember(id);
};

const getStaffMember = async (id) => {
	const staffMember = await StaffMember.findById(id).populate("user");
	return staffMember.toJSON();
};

export const staffMembersService = {
	createStaffMember,
	deleteStaffMember,
	getStaffMember,
	updateStaffMember,
	updatePhoto,
};
