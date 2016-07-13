var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  /*req.connection.renegotiate({
    requestCert: true,
    rejectUnauthorized: false
  }, function (err) {
    if (!err) {
      var cert = req.connection.getPeerCertificate();
      console.log(cert,12);
      res.render('index', { title: 'Express' });
    }
    else {
      console.log(err.message);
    }

  })*/

  res.render('index', { title: 'Express' });
});

module.exports = router;
