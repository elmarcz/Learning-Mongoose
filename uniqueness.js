require("./connection");

const User = require("./models/User")

async function createUsers() {
    const userOne = new User({
        username: 'johe',
        password: '12345a'
    });
    await userOne.save();
/*
    const userTwo = new User({
        username: 'fazt',
        password: 'securepassword'
    });
    await userTwo.save();
*/
}

createUsers()