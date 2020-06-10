/* eslint-disable no-console */
import Task from "../../models/Tasks";

class TasksController {
  listAll = (req, res) => {
    Task.find()
      .then(data => res.status(200).json({ data }))
      .catch(err => res.status(500).json({ error: err.message }));
  };

  listOne = (req, res) => {
    console.log(req);
  };

  insert = (req, res) => {
    console.log(req);
  };

  editOne = (req, res) => {
    console.log(req);
  };

  delete = (req, res) => {
    console.log(req);
  };
}

export default TasksController;
