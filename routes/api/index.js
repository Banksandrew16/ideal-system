const router = require('express').Router();
const thoughtRoutes = require('./thought-routes');
const userRoutes = require('./user-routes');

// add prefix of `/thought` routes created in `thought-routes.js`
router.use('/thought', thoughtRoutes);
router.use('/users', userRoutes);
module.exports = router;