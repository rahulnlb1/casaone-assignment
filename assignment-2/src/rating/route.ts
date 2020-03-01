import { Router, Request, Response } from "express";
import { Rating } from "./service";
import { IRating } from "./types";

export class RatingRoute {
  private router: Router;
  private ratingService: Rating;

  constructor() {
    this.router = Router();
    this.ratingService = new Rating();
  }

  private getAll = (_: Request, res: Response) => {
    const data = this.ratingService.findAll();

    res.status(200).send(data);
  };

  private getOne = (req: Request, res: Response) => {
    const ratingId: string = req.params.ratingId;

    const data = this.ratingService.findOneById(ratingId);

    res.status(200).send(data);
  };

  private create = (req: Request, res: Response) => {
    const rating: IRating = req.body;

    const ratingCreated = this.ratingService.create(rating);

    res.status(201).send(ratingCreated);
  };

  private getRatingsByProductId = (req: Request, res: Response) => {
    const productId: string = req.params.productId;

    const data = this.ratingService.getRatingsByProductId(productId);
    res.status(200).send(data);
  };

  public getRouter = (): Router => {
    this.router.route("/").get(this.getAll);

    // Get rating by rating id
    this.router.route("/:ratingId").get(this.getOne);

    // Create a new rating
    this.router.route("/").post(this.create);

    // Get the ratings of a given product id
    this.router.route("/product/:productId").get(this.getRatingsByProductId);

    return this.router;
  };
}
const BasePath = "/rating";
const ratingRoute = new RatingRoute();
const ratingRouter = ratingRoute.getRouter();
export { BasePath, ratingRouter };
