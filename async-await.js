require("./connection");

const Product = require("./models/Product");

async function main() {
  const product = new Product({
    name: "keyboard",
    description: "keyboard-corsair",
    price: 135,
  });

  const productSaved = await product.save();
  return productSaved;
}

main()
    .then(productSaved => console.log(productSaved))
    .catch(err => console.log("[DB] Database error ", err))