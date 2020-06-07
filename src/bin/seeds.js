import Task from "../models/Tasks";
import mongoose from "mongoose";

const tasksList = [
  {
    name: "task teste",
    description: "primeira task teste",
    duration: 8
  }
];

mongoose
  .connect("mongodb://localhost/corbie", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  // eslint-disable-next-line no-console
  .then(() => console.log("Connected to database!"));

Task.insertMany(tasksList).then(() => {
  console.log("Tasks inserted");
  mongoose.connection.close();
});
