import { BasePath as HealthBasePath, healthRouter } from "./health";
import { BasePath as RatingBasePath, ratingRouter } from "./rating";
import { Server } from "./server";

export class App {
  server: Server;

  constructor() {
    this.server = new Server();
  }

  public initApp = () => {
    this.initServer();
  };

  public getServer = (): Server => {
    return this.server;
  };

  public initRoutes = (): void => {
    this.server.addRouter(HealthBasePath, healthRouter);
    this.server.addRouter(RatingBasePath, ratingRouter);
  };

  private initServer = () => {
    this.server.startApp();
  };
}
