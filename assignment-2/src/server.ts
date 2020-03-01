import * as Express from "express";
import * as BodyParser from "body-parser";

import { PORT } from "./util";

export class Server {
  server: Express.Application;
  port: string;

  constructor(port: string = PORT) {
    this.server = Express();
    this.port = port;
    this.attachMiddlewares();
  }

  attachMiddlewares = (): void => {
    this.server.use(BodyParser.urlencoded({ extended: false }));
    this.server.use(BodyParser.json());
  };

  addRouter = (basePath: string, routerInstance: Express.Router): void => {
    this.server.use(basePath, routerInstance);
  };

  startApp = (): void => {
    this.server.listen(this.port, () => {
      console.log(`Listening to port ${this.port}`);
    });
  };
}
