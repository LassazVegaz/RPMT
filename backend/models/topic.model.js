import mongoose from "mongoose";

const _schema = mongoose.Schema(
  {
    topic: {
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

export const Topic = mongoose.model("Topic", _schema);
