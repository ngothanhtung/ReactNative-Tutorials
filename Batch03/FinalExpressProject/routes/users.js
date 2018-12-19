var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});


router.post('/login', function (req, res, next) {
  const { username, password } = req.body;
  if (username === 'admin' && password === '123456789') {
    res.json({
      ok: true,
      message: 'Login OK'
    });
  } else {
    res.json({
      ok: false,
      message: 'Login Failed'
    });
  }
});

module.exports = router;
