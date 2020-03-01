export enum RatingValue {
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4,
  Five = 5
}

export interface IRating {
  id: number;
  productId: number;
  givenBy: number;
  rating: RatingValue;
}
