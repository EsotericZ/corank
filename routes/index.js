const router = require('express').Router();
const apiRoutes = require('./apiRoutes');

const { renderHome } = require('../controllers/userController');

router.get('/', renderHome);
router.get('/homepage', renderHome);

router.use('./api', apiRoutes);

module.exports = router;