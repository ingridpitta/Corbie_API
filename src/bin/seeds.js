import { Project, Task, User } from "../models";
import { passwordManager } from "../utils";
import mongoose from "mongoose";

const tasksList = [
  {
    title: "task teste",
    description: "primeira task teste",
    duration: 8,
    cost: 0,
    status: "OnGoing",
    type: "Planning",
    profitable: true,
    dueDate: new Date(),
    project: "5ee927a8145ad11e5b404b20"
  }
];

const usersList = [
  {
    name: "ingrid pitta",
    username: "ingridpitta",
    password: passwordManager.encrypt("123456"),
    role: "project manager",
    email: "ingridpitta@email.com"
  }
];

const projectsList = [
  {
    title: "primeiro projeto",
    description: "projeto teste",
    hourPrice: 60,
    duration: 120,
    cost: 0,
    status: "ONGOING",
    dueDate: new Date(),
    user: "5ee92748acef231df1584a41"
  }
];

mongoose
  .connect("mongodb://localhost/corbie", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  // eslint-disable-next-line no-console
  .then(() => console.log("Connected to database!"));

// User.insertMany(usersList).then(() => {
//   console.log("Users inserted");
//   mongoose.connection.close();
// });

// Project.insertMany(projectsList).then(() => {
//   console.log("Projects inserted");
//   mongoose.connection.close();
// });

// Task.insertMany(tasksList).then(() => {
//   console.log("Tasks inserted");
//   mongoose.connection.close();
// });
