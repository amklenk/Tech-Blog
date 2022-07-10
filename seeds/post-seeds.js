//require
const { Post } = require('../models');

const postData = [
    {
        title: "Salt and Hash Your Passwords!",
	    text: "It is important to protect your users' data. You can do this with salting and hashing their passwords. This will protect their password from being hacked from your database. You can use bcrypt for this!",
	    user_id: 1,
    },
    {
        title: "What is an ORM? It’s important to find out!",
        text: "An ORM stands for a Object Relational Mapper. It is used to translate between our routes in JavaScript and databases like MySQL. Sequelize is an ORM that you can use to create objects that translate into MySQL tables!",
        user_id: 1,
        
    },
    {
        title: "The Joys of Using Handlebars",
        text: "Handlebars.js compiles templates into Javascript functions. It creates resuable templates that user helpers and partials to help us format data and use blocks of code.",
        user_id: 2,
    },
    {
        title: "What are Sessions and How Can We Use Them?",
        text: "Sessions help us store data about the user. That data is saved using cookies so that they user can see what they've interacted with once they have logged into a site. We can use express-session to help us create cookie variables that save a user's session using a session hash.",
        user_id: 3,
    },
    {
        title: "MySQL Queries or Sequelize?",
        text: "If you understand how to use MySQL queries to create databases and tables, populate the tables, update them, join them, and delete parts (or all) of them, why use Sequelize? Sequelize is an ORM, it helps us write directions for how we want our tables formatted as objects in JavaScript. Then we create the associations and use RESTful API routes to interact with the database. Why would we want to do this? With Sequelize, we can format our data easier. We can display that data on the front-end. It allows for migrations.",
        user_id: 4,
    },
    {
        title: "RESTful APIs Are the Way to Go!",
        text: "Have you ever used a third-party API? Rendered the data on the front-end? Sometimes the APIs are hard to access or do not allow us to access all of the data we need. Meet the RESTful API! It's an API that you create. REST stands for REpresentational State Transfer. That means you can access data from a database using HTTP requests! Now data can be rendered on the front-end with ease!",
        user_id: 4,
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;