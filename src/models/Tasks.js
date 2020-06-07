import mongoose from "mongoose";

const { Schema } = mongoose;

const TaskSchema = new Schema({
  // user: { type: mongoose.Types.ObjectId, ref: "User", required: true },
  project: { type: mongoose.Types.ObjectId, ref: "Project", required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  cost: { type: Number, required: false },
  status: {
    type: String,
    required: true,
    enum: ["Backlog", "OnGoing", "Done"],
    default: "Backlog"
  },
  type: { type: String, required: true },
  profitable: { type: Boolean, required: true, default: true },
  creationDate: { type: Date, required: true, default: new Date() },
  dueDate: { type: Date, required: true }
});

const Task = mongoose.model("Task", TaskSchema);

export default Task;
