require("../connection");

const Product = require("../models/Product");

async function main() {
    const products = await Product.find()
    console.log(products)
}

main()