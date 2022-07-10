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
    user_id: 2,
    post_id: 3,
  },
  {
    comment_text: "This is great! Thanks for sharing!",
    user_id: 1,
    post_id: 3,
  },
  {
    comment_text: "That's so cool! I can't wait to try it out!",
    user_id: 1,
    post_id: 4,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
