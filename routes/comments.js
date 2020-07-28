const router = require('express').Router();
const comment_controller = require('../controllers/commentController');

router.get('/', comment_controller.index);
router.post('/', comment_controller.create);
router.get('/:comment_id', comment_controller.show);
router.put('/:comment_id', comment_controller.update);
router.delete('/:comment_id', comment_controller.destroy);

module.exports = router;
