import mongoose from "mongoose";

const { Schema } = mongoose;

const TaskSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, requeired: true }
  // Still have to complete Schema's fields (Should see Miro project)
});

const Tasks = mongoose.model("Task", TaskSchema);

export default Tasks;
