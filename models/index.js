//require
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

//associations
//joins User and Post
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

//joins Comment with User and Post
User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});


//exports
module.exports = { User, Post, Comment }