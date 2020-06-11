import { name, email, password, username } from "./validation";
import PasswordManager from "./password";

export const paramSchema = { name, email, password, username };
export const passwordManager = new PasswordManager();
