import mongoose from "mongoose";

const { Schema } = mongoose;

const projectSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  hourPrice: { type: Number, required: true },
  duration: { type: Number, required: true },
  cost: { type: Number, required: false },
  status: {
    type: String,
    enum: ["BACKLOG", "ONGOING", "DONE", "CANCELED"],
    default: "BACKLOG"
  },
  creationDate: { type: Date, required: true, default: new Date() },
  dueDate: { type: Date, required: true },
  user: { type: mongoose.Types.ObjectId, ref: "User", required: true }
});

const Project = mongoose.model("Project", projectSchema);

export default Project;
