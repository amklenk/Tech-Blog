//require
const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "So important. Thanks for sharing!",
    user_id: 4,
    post_id: 1,
  },
  {
    comment_text: "Does Sequelize work with PostgreSQL, MariaDB, and SQLite?",
    user_id: 3,
    post_id: 2,
  },
  {
    comment_text: "Sequelize works with other DBs! You just need to tell Sequelize which dialect you want to use!",
    user_id: 4,
    post_id: 2,
  },
  {
    comment_text: "Handlebars partials and helpers are awesome. Can't wait to learn more!",
    user_id: 3,
    post_id: 3,
  },
  {
    comment_text: "This is great! Thanks for sharing!",
    user_id: 1,
    post_id: 3,
  },
  {
    comment_text: "That's so cool! I can't wait to try it out!",
    user_id: 2,
    post_id: 4,
  },
  {
    comment_text: "I'm starting to get Sequelize the more I use it.",
    user_id: 1,
    post_id: 5,
  },
  {
    comment_text: "So much easier to use associations and JS to join tables!",
    user_id: 2,
    post_id: 5,
  },
  {
    comment_text: "I've been using Sequelize with MySQL queries. Hoping it's not too hard to do the same with MariaDB!",
    user_id: 3,
    post_id: 5,
  },
  {
    comment_text: "Love RESTful APIs! Full-Stack all the way!",
    user_id: 2,
    post_id: 6,
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
