/* eslint-disable no-console */
import { Project } from "../../models";

class ProjectsController {
  listAll = async (req, res) => {
    const { id } = req.user;
    const projectsFromDb = await Project.findById(id);

    res.status(200).json({ projects: projectsFromDb });
  };

  listOne = async (req, res) => {
    const { id } = req.params;
    const projectFromDb = await Project.findById(id);

    res.status(200).json({ project: projectFromDb });
  };

  insertOne = async (req, res) => {
    const { user } = req;

    const data = {
      ...req.body,
      user: user._id
    };

    const newProject = await Project.insertOne(data);

    res.status(200).json({ newProject });
  };

  editOne = async (req, res) => {
    const { id } = req.params;

    const project = await Project.findById(id);

    if (project) {
      const data = {
        ...req.body
      };

      for (const prop in data) {
        if (!data[prop]) delete data[prop];
      }

      const editedProject = await Project.findByIdAndUpdate(id, data, {
        useFindAndModify: true
      });

      res.status(200).json({ editedProject });
    }
  };

  deleteOne = async (req, res) => {
    const { id } = req.params;

    try {
      await Project.findByIdAndDelete(id);

      res.status(200).json({ message: "Projeto deletado com sucesso" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error: Probelma no servidor de banco de dados" });
    }
  };
}

export default ProjectsController;
