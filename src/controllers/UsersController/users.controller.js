/* eslint-disable no-console */
import { User } from "../../models";
import { passwordManager } from "../../utils";

class UsersController {
  listAll = async (req, res) => {
    const usersFromDb = await User.find();

    res.status(200).json({ users: usersFromDb });
  };

  listOne = async (req, res) => {
    const { id } = req.params;

    const userFromDb = await User.findById({ id });

    res.status(200).json({ user: userFromDb });
  };

  editOne = async (req, res) => {
    const {
      name,
      email,
      username,
      currentPassword,
      newPassword,
      confirmationNewPassword
    } = req.body;

    const userEmailExists = await User.findOne({ email });

    if(userEmailExists && userEmailExists._id.toString() !== req.user.id){
      res.status(403).json({message: "Email já cadastrado"});

      return
    }

    const user = await User.findById(req.user.id);

    if(currentPassword && newPassword && confirmationNewPassword){
      const {password} = user;

      if(!passwordManager.verify(currentPassword, password)){
        res.status(400).json({message: "Senha incorreta"});

        return
      }

      if(newPassword !== confirmationNewPassword){
        res.status(400).json({message: "Nova senha e confirmação da nova senha precisam ser iguais"});

        return
      }

      try {
        await User.findByIdAndUpdate(req.user.id, {password: passwordManager.encrypt(newPassword)},  { useFindAndModify: true });
      } catch(error) {
        res.status(500).json({message: "Error: Probelma no servidor de banco de dados"});

        return
      }
      
    }

    const newObj = {name, email, username};
    
    for (const prop in newObj) {
      if (!newObj[prop]) delete newObj[prop];
    }

    try {
      await User.findByIdAndUpdate(req.user.id, newObj, { useFindAndModify: true });
      
      res.status(200).json({ message: 'Usuário atualizado com sucesso' });
    } catch (error) {
      res.status(500).json({ message: "Error: Probelma no servidor de banco de dados" });
    }
  };

  deleteOne = async (req, res) => {
    const { id } = req.user;

    try {
      await User.findByIdAndDelete(id);
      
      res.status(200).json({ message: 'Usuário deletado com sucesso' });
    } catch (error) {
      res.status(500).json({ message: "Error: Probelma no servidor de banco de dados" });
    }
  };
}

export default UsersController;
