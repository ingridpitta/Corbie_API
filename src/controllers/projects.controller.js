/* eslint-disable no-console */
import Project from "../models/Projects";

class ProjectsController {
  listAll = (req, res) => {
    Project.find()
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

export default ProjectsController;
