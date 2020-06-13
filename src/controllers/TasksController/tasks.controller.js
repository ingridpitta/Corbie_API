/* eslint-disable no-console */
import {Task} from "../../models";

class TasksController {
  listAll = (req, res) => {
    Task.find()
      .then(data => res.status(200).json({ data }))
      .catch(err => res.status(500).json({ error: err.message }));
  };

  listOne = async (req, res) => {
    const { id } = req.params;
    const taskFromDb = await Task.findById({ id });

    res.status(200).json({ task: taskFromDb });
  };

  insertOne = async (req, res) => {
    const {title, description, duration, cost, status, type, profitable, dueDate } = req.body;

    const data = {
      title, description, duration, cost, status, type, profitable, dueDate 
    }

    const newTask = await Task.insertOne(data);

    res.status(200).json({newTask});

  };

  editOne = (req, res) => {
    const { id } = req.params;
    console.log(req);
  };

  deleteOne = (req, res) => {
    const { id } = req.params;
    console.log(req);
  };
}

export default TasksController;
