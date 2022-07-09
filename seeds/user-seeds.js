//require
const { User } = require('../models');

const userData = [
    {
        username: "amandamklenk32",
        email: "amandamklenk@gmail.com",
        password: "password12345"
    },
    {
        username: "ZoeJ2018",
        email: "zoejuliak@yahoo.com",
        password: "password23456"
    },
    {
        username: "jameswyatt1",
        email: "jwk2022@hotmail.com",
        password: "password54321"
    },
    {
        username: "kevind123",
        email: "kevind@gmail.com",
        password: "password23156"
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
