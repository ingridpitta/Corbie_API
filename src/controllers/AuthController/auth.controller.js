import joi from "joi";
import jwt from "jsonwebtoken";
import { paramsSchema, passwordManager } from "../../utils";
import User from "../../models/Users";

class AuthController {
  signup = async (req, res) => {
    const { name, password, email, telephone } = paramsSchema;

    const signupSchema = joi
      .object()
      .optional({ abortEarly: false })
      .keys({ name, password, email, telephone });

    const validation = joi.validate(req.body, signupSchema);
  };
}

export default AuthController;
