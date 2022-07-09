//require
const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

//check to make sure endpoint exists
router.use((req, res) => {
    res.status(404).end();
});

//export
module.exports = router;