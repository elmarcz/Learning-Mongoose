require("../connection");

const User = require("../models/User");

async function updateUser() {
    const user = await User.update({username: 'fazt'}, {
        password: 'contraseñasegure'
    })
    console.log(`[DB] Se ha actualizado el usuario: fazt para modificar su contraseña a: contraseñasegure`)
}

updateUser();