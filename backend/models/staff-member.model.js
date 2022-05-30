import mongoose from "mongoose";

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
		photo: {
			type: String,
			required: true,
		},
		phone: {
			type: String,
			required: true,
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

export const StaffMember = mongoose.model("StaffMember", _schema);
