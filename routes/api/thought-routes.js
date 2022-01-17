const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
 
} = require('../../controllers/thoughtController');

router
    .route('/')
    .get(getAllThoughts)

router
    .route('/:userId')
    .get(getThoughtById)
    .post(addThought);

router
    .route('/:userId/:thoughtId')
    .put(addReaction)
    .delete(removeThought);

router
    .route('/:userId/:thoughtId/:reactionId')
    .delete(removeReaction);

module.exports = router;
