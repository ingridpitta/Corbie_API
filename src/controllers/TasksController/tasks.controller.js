/* eslint-disable no-console */
import { Task } from "../../models";

class TasksController {
  listAll = async (req, res) => {
    const tasksFromDb = await Task.find();

    res.status(200).json({ tasks: tasksFromDb });
  };

  listOne = async (req, res) => {
    const { id } = req.params;
    const taskFromDb = await Task.findById({ id });

    res.status(200).json({ task: taskFromDb });
  };

  insertOne = async (req, res) => {
    const { id } = req.params;

    const data = {
      ...req.body,
      project: id
    };

    const newTask = await Task.insertOne(data);

    res.status(200).json({ newTask });
  };

  editOne = async (req, res) => {
    const { id } = req.params;

    const task = await Task.findById(id);

    if (task) {
      const data = {
        ...req.body
      };

      for (const prop in data) {
        if (!data[prop]) delete data[prop];
      }

      const editedTask = await Task.findByIdAndUpdate(id, data, {
        useFindAndModify: true
      });

      res.status(200).json({ editedTask });
    }
  };

  deleteOne = async (req, res) => {
    const { id } = req.params;

    try {
      await Task.findByIdAndDelete(id);

      res.status(200).json({ message: "Task deletada com sucesso" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error: Probelma no servidor de banco de dados" });
    }
  };
}

export default TasksController;
