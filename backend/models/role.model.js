import mongoose from "mongoose";

const _schema = mongoose.Schema(
	{
		name: {
			type: String,
			unique: true,
			required: true,
		},
	},
	{
		toJSON: {
			virtuals: true,
		},
	}
);

_schema.virtual("users", {
	ref: "User",
	localField: "name",
	foreignField: "role",
});

export const Role = mongoose.model("Role", _schema);
