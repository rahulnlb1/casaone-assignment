import { BasePath as HealthBasePath, healthRouter } from "./health";
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
  };

  private initServer = () => {
    this.server.startApp();
  };
}
