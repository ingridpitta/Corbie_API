/* eslint-disable no-console */
import App from "./app";

const server = new App().app;

server.listen(5000, () => console.log("App running on PORT 5000"));
