require("../connection");

const User = require("../models/User");

async function deleteUser() {
    /*
    const user = await User.deleteMany({password: '12345'})
    console.log(`[DB] Se han eliminado TODOS los usuarios con el password = 12345`)
    */
    const user = await User.deleteOne({password: '12345'})
    console.log(`[DB] Se ha eliminado UNO de los usuarios con el password = 12345`)
}

deleteUser();