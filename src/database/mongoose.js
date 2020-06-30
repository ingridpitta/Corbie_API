import mongoose from "mongoose";

module.exports = mongoose
  .connect(process.env.MONGOBD_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  // eslint-disable-next-line no-console
  .then(() => console.log("Connected to database!"));
