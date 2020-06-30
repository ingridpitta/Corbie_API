/* eslint-disable no-console */
import App from "./app";

const server = new App().app;

server.listen(process.env.PORT, () => console.log(`App running on PORT ${process.env.PORT}`));
