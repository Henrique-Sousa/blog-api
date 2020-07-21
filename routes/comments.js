const router = require('express').Router();

router.get('/', (req, res) => res.send('comments index'));
router.post('/', (req, res) => res.send('comments create'));
router.get('/:id', (req, res) => res.send('comment show ' + req.params.id));
router.put('/:id', (req, res) => res.send('comment update ' + req.params.id));
router.delete('/:id', (req, res) => res.send('comment destroy ' + req.params.id));

module.exports = router;
