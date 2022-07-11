//require
const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js')

router.use('/api', apiRoutes);
router.use('/', homeRoutes);

//check to make sure endpoint exists
router.use((req, res) => {
    res.status(404).end();
});

//export
module.exports = router;