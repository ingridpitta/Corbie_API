import mongoose from "mongoose";

module.exports = mongoose
  .connect("mongodb://localhost/corbie", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  // eslint-disable-next-line no-console
  .then(() => console.log("Connected to database!"));
