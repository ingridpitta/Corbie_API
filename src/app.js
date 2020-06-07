import express from "express";
import apiRoutes from "./routes/apiRoutes.js";

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    // this.routes();
  }

  middlewares = () => {
    this.app.use(express.json());
  };

  //   routes = () => {
  //     this.app.use("/api", apiRoutes);
  //   };
}

export default new App().app;
