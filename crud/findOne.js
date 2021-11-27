require("../connection");

const User = require("../models/User");

async function getUser() {
    const user = await User.findOne({username: 'joe'})
    console.log(user)
}

getUser()