// Assignment 3: Function, Array, and Object
function avg(data) {
  let totalPrice = 0;
  for (let i = 0; i < data.size; i++) {
    totalPrice += data.products[i].price;
  }
  console.log(totalPrice / data.size);
}

avg({
  size: 3,
  products: [
    {
      name: "Product 1",
      price: 100,
    },
    {
      name: "Product 2",
      price: 700,
    },
    {
      name: "Product 3",
      price: 250,
    },
  ],
});
