import express from "express";
import cors from "cors";
import apiRoutes from "./routes/apiRoutes";

require("dotenv").config();
require("./database/mongoose");

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares = () => {
    this.app.use(express.static(__dirname + "/public"));
    this.app.use(express.json());
    this.app.use(
      cors({
        origin: [process.env.URL_DEV, process.env.URL_PROD],
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"]
      })
    );
  };

  routes = () => {
    this.app.use("/api", apiRoutes);
    this.app.use((req, res) => {
      res.sendFile(__dirname + "/public/index.html");
    });
  };
}

export default App;
