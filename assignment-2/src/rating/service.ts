import { IRating } from "./types";
export class Rating {
  rating: IRating[];

  constructor() {
    this.rating = [];
  }

  public findAll() {
    return this.rating;
  }

  public findOneById(id: string) {
    const rating = this.rating.filter(element =>
      element.id === id ? true : false
    );
    return rating;
  }

  public create(rating: IRating) {
    rating.id = String(this.rating.length + 1);
    this.rating = [...this.rating, rating];
  }

  private getRatingByProduct(productId: string) {
    const rating = this.rating.filter(element =>
      element.productId === productId ? true : false
    );
    return rating;
  }

  public getRatingsByProductId(_productId: string) {
    //creating basic structure for returning result
    const result = {
      productId: _productId,
      rating: {
        total: 0,
        average: 0,
        count: {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0
        }
      }
    };

    const ratings = this.getRatingByProduct(_productId);
    result.rating.total = ratings.length;

    let sumOfRating = 0;
    for (const rating of ratings) {
      result.rating.count[rating.rating] =
        result.rating.count[rating.rating] + 1;
      sumOfRating = sumOfRating + Number(rating.rating);
    }

    result.rating.average = sumOfRating / ratings.length;

    return result;
  }
}
