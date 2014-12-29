var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/userlist', function(req, res) {
	var db = req.db;
	db.collection('userlist').find().toArray(function(err, items){
		console.log(items);
		res.json(items);
	});
  //res.send('respond with a resource');
});

router.post('/adduser', function(req, res){
	var db = req.db;
	db.collection('userlist').insert(req.body, function(err, result){
		res.send(
			(err === null)?{msg:''} : {msg:err}
			);
	});
});

module.exports = router;
