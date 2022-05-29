import mongoose from "mongoose";

const _schema = mongoose.Schema({
  _id: false,
  groupId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
});

_schema.virtual("student", {
  ref: "student",
  localField: "studentId",
  foreignField: "userId",
});

export const Supervisor = mongoose.model("Group", _schema);
