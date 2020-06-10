import { name, email, password, telephone } from "./validation";
import PasswordManager from "./password";

export const paramSchema = { name, email, password, telephone };
export const passwordManager = new PasswordManager();
