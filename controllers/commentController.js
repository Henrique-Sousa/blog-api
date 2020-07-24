// comments list
exports.index = (req, res) => res.send('comments index');

exports.create = (req, res) => res.send('comments create');

exports.show = (req, res) => res.send('comment show ' + req.params.id);

exports.update = (req, res) => res.send('comment update ' + req.params.id);

exports.destroy = (req, res) => res.send('comment destroy ' + req.params.id);

