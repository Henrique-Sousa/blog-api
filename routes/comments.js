const router = require('express').Router();

router.get('/', (req, res) => res.send('comments index'));
router.post('/', (req, res) => res.send('comments create'));
router.get('/:id', (req, res) => res.send('comment show'));
router.put('/:id', (req, res) => res.send('comment update'));
router.delete('/:id', (req, res) => res.send('comment destroy'));

module.exports = router;
