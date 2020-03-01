import { IRating } from "./types";
export class Rating {
  rating: IRating[];

  constructor() {
    this.rating = [];
  }

  public findAll() {
    return this.rating;
  }

  public findOneById(id: number) {
    const rating = this.rating.filter(element =>
      element.id === id ? true : false
    )[0];
    return rating;
  }

  public create(rating: IRating) {
    rating.id = this.rating.length + 1;
    this.rating = [...this.rating, rating];
  }

  public getRatingsByProductId(_productId: number) {}
}
