const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('homepage', {
    id: 1,
    title: "Salt and Hash Your Passwords!",
	text: "It is important to protect your users' data. You can do this with salting and hashing their passwords. This will protect their password from being hacked from your database. You can use bcrypt for this!",
    title: 'Handlebars Docs',
    created_at: new Date(),
    comments: [{}, {}],
    user: {
      username: 'test_user'
  }});
});

module.exports = router;