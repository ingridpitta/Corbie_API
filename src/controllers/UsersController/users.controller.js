/* eslint-disable no-console */
import { User } from "../../models";
import { passwordManager } from "../../utils";

class UsersController {
  listAll = async (req, res) => {
    const usersFromDb = await User.find();

    res.status(200).json({ users: usersFromDb });
  };

  listOne = async (req, res) => {
    const { id } = req.user;

    const userFromDb = await User.findById({ id });

    res.status(200).json({ user: userFromDb });
  };

  editOne = async (req, res) => {
    const {
      name,
      email,
      currentPassword,
      newPassword,
      confirmationNewPassword
    } = req.body;

    
  };

  delete = async (req, res) => {
    console.log(req);
  };
}

export default UsersController;
