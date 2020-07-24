const router = require('express').Router();
const post_controller = require('../controllers/postController');

router.get('/', post_controller.index)
router.post('/', post_controller.create)
router.get('/:id', post_controller.show)
router.put('/:id', post_controller.update)
router.delete('/:id', post_controller.destroy)

module.exports = router;

