//require
const { User } = require('../models');
const bcrypt = require('bcrypt');

const userData = [
    {
        username: "amandamklenk32",
        email: "amandamklenk@gmail.com",
        password: bcrypt.hashSync("password12345", 10)
    },
    {
        username: "ZoeJ2018",
        email: "zoejuliak@yahoo.com",
        password: bcrypt.hashSync("password23456", 10)
    },
    {
        username: "jameswyatt1",
        email: "jwk2022@hotmail.com",
        password: bcrypt.hashSync("password54321", 10)
    },
    {
        username: "kevind123",
        email: "kevind@gmail.com",
        password: bcrypt.hashSync("password23156", 10)
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
