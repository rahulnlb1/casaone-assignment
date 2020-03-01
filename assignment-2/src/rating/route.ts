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
    //get data from the service
    const data = this.ratingService.findAll();

    //return the result with status code
    res.status(200).send(data);
  };

  private getOne = (req: Request, res: Response) => {
    //reading parameters of the request
    const ratingId: string = req.params.ratingId;

    //getting data from the service
    const data = this.ratingService.findOneById(ratingId);

    //returning result with valid status codes
    if (data.length > 0) {
      res.status(200).send(data[0]);
    } else {
      res.status(404).send();
    }
  };

  private create = (req: Request, res: Response) => {
    //readng data from body
    const rating: IRating = req.body;

    //calling service to create data
    const ratingCreated = this.ratingService.create(rating);

    //returning result with valid status codes
    res.status(201).send(ratingCreated);
  };

  private getRatingsByProductId = (req: Request, res: Response) => {
    //reading parameters of the request
    const productId: string = req.params.productId;

    //calling service to get data
    const data = this.ratingService.getRatingsByProductId(productId);

    //returning result with valid status codes
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(404).send();
    }
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
