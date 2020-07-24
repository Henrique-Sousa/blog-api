const router = require('express').Router();
const comment_controller = require('../controllers/commentController');

router.get('/', comment_controller.index);
router.post('/', comment_controller.create);
router.get('/:id', comment_controller.show);
router.put('/:id', comment_controller.update);
router.delete('/:id', comment_controller.destroy);

module.exports = router;
