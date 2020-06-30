import mongoose from "mongoose";

module.exports = mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  // eslint-disable-next-line no-console
  .then(() => console.log("Connected to database!"));
