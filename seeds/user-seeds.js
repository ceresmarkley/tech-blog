const { User } = require('../models');

const userData = [
    {
        "name": "Mark",
        "email": "blink@gmail.com",
        "password": "blink182"
    },
    {
        "name": "Tom",
        "email": "blink1@gmail.com.com",
        "password": "blink182"
    },
    {
        "name": "Travis",
        "email": "blink2@gmail.com.com",
        "password": "blink182"
    }
]


const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;