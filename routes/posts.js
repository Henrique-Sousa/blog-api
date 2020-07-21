const router = require('express').Router();

router.get('/', (req, res) => res.send('posts index'));
router.post('/', (req, res) => res.send('posts create'));
router.get('/:id', (req, res) => res.send('post show'));
router.put('/:id', (req, res) => res.send('post update'));
router.delete('/:id', (req, res) => res.send('post destroy'));

module.exports = router;
