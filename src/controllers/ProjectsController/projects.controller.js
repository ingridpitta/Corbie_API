/* eslint-disable no-console */
import {Project} from "../../models";

class ProjectsController {
  listAll = (req, res) => {
    Project.find()
      .then(data => res.status(200).json({ data }))
      .catch(err => res.status(500).json({ error: err.message }));
  };

  listOne = (req, res) => {
    const { id } = req.params;
    console.log(req);
  };

  insertOne = (req, res) => {
    console.log(req);
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

export default ProjectsController;
