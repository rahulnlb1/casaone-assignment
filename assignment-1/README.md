# Product variables growth

## Task

```
Every product (furniture item) has an associated product ID. There are some variables that are fixed to the product and we know them when we buy the product. Examples for fixed variables: color, finish, purchase price etc



There are few variables we need to now capture which are derived

- Ops related variables

Examples: Time to assemble the product, cost of assembly etc

Note that these derived variables can change in value over a period of time as well. For example, the delivery crew can handle the installation better since they become experts and the 'Time to assemble the product' variable changes.

I want to know your thoughts on these

So far, we have handled the fixed variables well. How do you think we should proceed with the 'derived' variables? How do we bake it into our system? If the business teams need to make a decision based on the derived variables, how will you help the teams get it? How will you ensure that the 'derived values' are updated with the latest value.
```

## Solution

According to me, there are various approaches to handle these variables. Lets go ahead and discuss these approaches:

### 1. Fixed amount for a product category

The simplest way to handle these variables is to store the values w.r.t the product categories. This method is often used by local furniture vendors.

For example:

> Cost of installation of a King-size bed is 1000 INR.

Advantages of this approach:

1. This approach is simple w.r.t. implementation.
2. No/small calculation required to derive the values.

Disadvantages:

1. Difficult to categorize and maintain prices for the category. This approach might be good for small furniture vendors, but for a company like CasaOne, which has a huge varieties of products, categorizing w.r.t. the variable costs would be a challenging taks.
2. Scalability: Their might be huge number variables that might affect the cost in future. This approach might not work if the number of variables increases.
3. Same cost might not hold good for all the products in the same category. Ex: A new product, King-sized bed, is offered to the customers which has cost of assembly way more than normal king-sized beds. It would be difficult to derive the cost in this approach.

