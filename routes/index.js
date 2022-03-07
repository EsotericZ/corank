const router = require('express').Router();
const apiRoutes = require('./apiRoutes');

const { adminLogin, adminPage, renderHome } = require('../controllers/userController');

router.get('/', renderHome);
router.get('/admin', adminLogin);
router.get('/adminPage', adminPage);
router.get('/homepage', renderHome);

router.use('./api', apiRoutes);

module.exports = router;