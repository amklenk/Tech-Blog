//require
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

//renders posts
router.get('/', (req, res) => {
    console.log(req.session);
    Post.findAll({
        attributes: ["id", "title", "text", "created_at"],
        order: [["created_at", "DESC"]],
        include: [
          {
            model: Comment,
            attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
            include: {
              model: User,
              attributes: ["username"],
            },
          },
          {
            model: User,
            attributes: ["username"],
          },
        ],
      })
        .then(dbPostData => {
            const posts = dbPostData.map(post => post.get({ plain: true }));
            res.render('homepage', { posts });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json(err);
        });
});

//allows user to log in
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });


//export
module.exports = router;