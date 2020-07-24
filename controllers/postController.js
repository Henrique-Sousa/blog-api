// post list
exports.index = (req, res) => res.send('posts index');

exports.create = (req, res) => res.send('posts create');

exports.show = (req, res) => res.send('post show ' + req.params.id);

exports.update = (req, res) => res.send('post update ' + req.params.id);

exports.destroy = (req, res) => res.send('post destroy ' + req.params.id);
