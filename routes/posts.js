const router = require('express').Router();
const post_controller = require('../controllers/postController');

router.get('/', post_controller.index)
router.post('/', post_controller.create)
router.get('/:post_id', post_controller.show)
router.put('/:post_id', post_controller.update)
router.delete('/:post_id', post_controller.destroy)

module.exports = router;

