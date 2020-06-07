import mongoose from "mongoose";

const {Schema} = mongoose;

const userSchema = new Schema({
  facebookId: String,
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    required: true,
    enum: ["project manager", "member"],
    default: "member"
  },
  email: { type: String, required: true, unique: true },
  status: { type: Boolean, required: true, default: true }
});

const User = mongoose.model("User", userSchema);

export default User;
