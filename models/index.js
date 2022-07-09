//require
const User = require('./User');
const Post = require('./Post');

//associations
//joins User and Post
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

//


//exports
module.exports = { User, Post }