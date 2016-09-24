var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/webcam', function(req,res,next){
  res.render('webcam', {title: 'Webcam Scanner'})
});
module.exports = router;
