const router = require('express').Router();

router.get('/', (req, res) => res.send('posts index'));
router.post('/', (req, res) => res.send('posts create'));
router.get('/:id', (req, res) => res.send('post show ' + req.params.id));
router.put('/:id', (req, res) => res.send('post update ' + req.params.id));
router.delete('/:id', (req, res) => res.send('post destroy ' + req.params.id));

module.exports = router;
