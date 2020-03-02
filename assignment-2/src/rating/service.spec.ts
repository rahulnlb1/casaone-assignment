import "jest";

import { Rating } from "./service";

//import { IRating } from "./types";

const getTestData = () => {
  return [
    {
      id: "1",
      givenBy: "U_001",
      productId: "P_001",
      rating: 3
    },
    {
      id: "2",
      givenBy: "U_002",
      productId: "P_001",
      rating: 5
    },
    {
      id: "3",
      givenBy: "U_001",
      productId: "P_002",
      rating: 1
    },
    {
      id: "4",
      givenBy: "U_003",
      productId: "P_003",
      rating: 3
    }
  ];
};

describe("rating service", function() {
  const service = new Rating();

  const testData = getTestData();

  beforeAll(async function() {
    return Promise.all(testData.map(item => service.create(item)));
  });

  describe("findAll", function() {
    it("find all the ratings", async function() {
      const allData = service.findAll();

      expect(allData).toHaveLength(4);
      expect(allData).toMatchObject(testData);
    });
  });

  describe("findOneById", function() {
    it("finds the item by id", async function() {
      const [firstItemFromDataset] = service.findAll();

      const [firstItem] = service.findOneById(firstItemFromDataset.id);

      expect(firstItem).toMatchObject(firstItemFromDataset);
    });
  });

  describe("addProductRating", function() {
    it("add product rating in the system", async function() {
      const itemToAdd = {
        id: "5",
        givenBy: "U_001",
        productId: "P_004",
        rating: 4
      };

      service.create(itemToAdd);

      const allItems = service.findAll();

      expect(allItems).toHaveLength(5);
    });
  });

  describe("getRatingsByProductId", function() {
    it("finds the aggregated ratings for product id", async function() {
      const productId = getTestData()[0].productId;

      const result = service.getRatingsByProductId(productId);

      expect(result).toMatchObject({
        productId,
        rating: {
          total: 2,
          average: 4,
          count: {
            1: 0,
            2: 0,
            3: 1,
            4: 0,
            5: 1
          }
        }
      });
    });
  });
});
