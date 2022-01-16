const router = require('express').Router();
const thoughtRoutes = require('./thought-routes');
const userRoutes = require('./user-routes');

// add prefix of `/thought` routes created in `thought-routes.js`
router.use('/thought', thoughtRoutes);
// add prefix of `/users` routes created in `user-routes.js`
router.use('/users', userRoutes);
module.exports = router;