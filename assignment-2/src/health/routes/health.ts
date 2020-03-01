import { Router, Request, Response } from "express";

export class HealthRoute {
  private router: Router;

  constructor() {
    this.router = Router();
  }

  private get = (_req: Request, res: Response): void => {
    res.status(200).json({ health: "OK" });
  };

  public getRouter = (): Router => {
    this.router.get("/", this.get);

    return this.router;
  };
}
const BasePath = "/health";
const healthRoute = new HealthRoute();
const healthRouter = healthRoute.getRouter();
export { BasePath, healthRouter };
