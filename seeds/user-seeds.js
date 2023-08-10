const { User } = require('../models');

const userData = [{
        username: 'Mark',
        password: 'blink182'

    },
    {
        username: 'Tom',
        password: 'blink182'
    },
    {
        username: 'Travis',
        password: 'blink182'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;