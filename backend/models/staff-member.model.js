import mongoose from "mongoose";
import { mediaServices } from "../services/media.service";

const _schema = mongoose.Schema(
	{
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			unique: true,
		},
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		gender: {
			type: String,
			required: true,
			enum: ["male", "female"],
		},
		phone: {
			type: String,
			required: true,
		},
		photo: {
			type: String,
		},
	},
	{
		toJSON: {
			virtuals: true,
		},
	}
);

_schema.virtual("user", {
	ref: "User",
	localField: "userId",
	foreignField: "_id",
	justOne: true,
});

_schema.virtual("photoUrl").get(function () {
	return this.photo ? mediaServices.getProfilePicturesURL(this.photo) : null;
});

export const StaffMember = mongoose.model("StaffMember", _schema);
