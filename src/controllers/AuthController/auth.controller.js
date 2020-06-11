import joi from "joi";
import jwt from "jsonwebtoken";
import { paramsSchema, passwordManager } from "../../utils";
import { User } from "../../models";

class AuthController {
  signup = async (req, res) => {
    const { name, username, password, email } = paramsSchema;

    const signupSchema = joi
      .object()
      .optional({ abortEarly: false })
      .keys({ name, username, password, email });

    const validation = joi.validate(req.body, signupSchema);

    if (validation.error) {
      const errors = validation.error.details.map(error => ({
        error: error.message,
        field: error.context.key
      }));

      res.status(400).json(errors);
      return;
    }

    const userExist = await User.findOne({ email: req.body.email });

    if (userExist) {
      res.status(400).json({ message: "Usuário já cadastrado" });
      return;
    }

    req.body.password = passwordManager.encrypt(req.body.password);

    await User.create(req.body);

    res.status(200).json({ message: "Usuário cadastrado com sucesso" });
  };

  login = async (req, res) => {
    const { email, password } = req.body;

    const userFromDb = await User.findOne({ email });

    if (!userFromDb) {
      res.status(400).json({ message: "Credenciais não conferem" });
      return;
    }

    const isPasswordValid = passwordManager.verify(
      password,
      userFromDb.password
    );

    if (!isPasswordValid) {
      res.status(401).json({ message: "Credenciais não conferem" });
      return;
    }

    const token = jwt.sign(
      { name: userFromDb.name, email: userFromDb.email, id: userFromDb._id },
      process.env.JWT_TOKEN,
      {expiresIn: process.env.JWT_TOKEN_EXPIRATION}
    );

    const refreshToken = jwt.sign(
      {
        name: userFromDb.name,
        email: userFromDb.email,
        id: userFromDb._id,
        token
      },
      process.env.JWT_TOKEN,
      {expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRATION}
    );

    res.status(200).json({
      type: "Bearer",
      token,
      refreshToken
    });
  };
}

export default AuthController;
