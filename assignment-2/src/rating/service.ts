import { IRating } from "./types";
export class Rating {
  rating: IRating[];

  constructor() {
    this.rating = [];
  }

  /*
   * This method gets all the ratings in the system
   */
  public findAll() {
    return this.rating;
  }

  /*
   * This method finds the rating based on the id as input
   */
  public findOneById(id: string) {
    //finding rating based on id
    const rating = this.rating.filter(element =>
      element.id === id ? true : false
    );
    return rating;
  }

  /*
   * This method creates a new rating in the system
   */
  public create(rating: IRating) {
    //generating new id for each rating and saving it in array
    rating.id = String(this.rating.length + 1);
    this.rating = [...this.rating, rating];
  }

  /*
   * This method gets all the ratings of a given product
   */
  private getRatingByProduct(productId: string) {
    //filtering rating based on productId
    const rating = this.rating.filter(element =>
      element.productId === productId ? true : false
    );
    return rating;
  }

  /*
   * This method generates the product rating
   */
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

    //get all rating of the product
    const ratings = this.getRatingByProduct(_productId);

    //If no ratings are provided for a product, return initial values as 0
    if (ratings.length === 0) {
      return result;
    }

    //calculating the result
    result.rating.total = ratings.length;

    //getting the sum of all the ratings
    let sumOfRating = 0;
    for (const rating of ratings) {
      result.rating.count[rating.rating] =
        result.rating.count[rating.rating] + 1;
      sumOfRating = sumOfRating + Number(rating.rating);
    }

    //calculating average
    result.rating.average = sumOfRating / ratings.length;

    return result;
  }
}
