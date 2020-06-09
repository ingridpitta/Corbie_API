import express from "express";
import cors from "cors";
import apiRoutes from "./routes/apiRoutes";

require("./database/mongoose");

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares = () => {
    this.app.use(express.json());
    this.app.use(
      cors({
        origin: "http://localhost:3000",
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"]
      })
    );
  };

  routes = () => {
    this.app.use("/api", apiRoutes);
  };
}

export default App;
