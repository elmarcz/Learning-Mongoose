require("../connection");

const Product = require("../models/Product");

const createProduct = async () => {

    const laptopone = new Product({
        name: 'laptop hp',
        description: 'htp pavilion 15'
    })
    await laptopone.save()

    const laptoptwo = new Product({
        name: 'laptop lenovo',
        description: 'lenovo x1'
    })
    await laptoptwo.save()

    console.log('[DB] Los datos han sido guardados correctamente')
}

createProduct();