function processProducts(products) {
  const productNames = products.map(product => product.name);

  products.forEach(product => {
    const message = `${product.name} is ${product.price >= 50 ? 'above' : 'below'} $50`;
    console.log(message);
  });
}

const productsArray = [
  { name: "Laptop", price: 1000 }, 
  { name: "Mouse", price: 20 },
  { name: "Keyboard", price: 80 },
  { name: "Webcam", price: 45 }
];

processProducts(productsArray);
