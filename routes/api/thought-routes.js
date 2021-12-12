const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    addThought,
    addReaction,
    removeThought,
    removeReaction
} = require('../../controllers/thoughtController');

// /api/thought
router
    .route('/')
    .get(getAllThoughts)

// /api/thought/<userId>
router
    .route('/:userId')
    .get(getThoughtById)
    .post(addThought);

// /api/thought/<userId>/<thoughtId>
router
    .route('/:userId/:thoughtId')
    .put(addReaction)
    .delete(removeThought);

// /api/thought/<userId>/<thoughId>/<reactionId>
router
    .route('/:userId/:thoughtId/:reactionId')
    .delete(removeReaction);

module.exports = router;