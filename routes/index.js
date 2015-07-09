var express = require('express');
var quizController = require('../controllers/quiz_controller.js');
var router = express.Router();

/* GET home page. */
router.get('/quizes/question',quizController.question);
router.get('/quizes/answer',quizController.answer);
router.get('/author',function(req,res,next){
	res.render('author');
});
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
});

module.exports = router;
