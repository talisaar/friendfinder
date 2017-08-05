var path = require("path");
var friendlist = require(path.join(__dirname, '../data/friends.js'));
var theNotoriousArry = friendlist.friendsArray;
var totaldiff;
var totaldiff2;
var smallestdiff = 99999;
var data = {};
var choosenperson;

module.exports = function(app) {

	app.get("/api/friends", function(req, res) {

	    res.send(theNotoriousArry);

	  });


	app.post("/api/friends", function(req, res) {

	    console.log(req.body);
	    req.body.q1 = parseInt(req.body.q1);
	    req.body.q2 = parseInt(req.body.q2);
	    req.body.q3 = parseInt(req.body.q3);
	    req.body.q4 = parseInt(req.body.q4);
	    req.body.q5 = parseInt(req.body.q5);
		data = req.body;
	    theNotoriousArry.push(data);
		console.log(theNotoriousArry);

		for (i=0; i<(theNotoriousArry.length-1); i++) {

		totaldiff = Math.abs((theNotoriousArry[i].q1)-(theNotoriousArry[theNotoriousArry.length-1].q1))
		+ Math.abs((theNotoriousArry[i].q2)-(theNotoriousArry[theNotoriousArry.length-1].q2))
		+ Math.abs((theNotoriousArry[i].q3)-(theNotoriousArry[theNotoriousArry.length-1].q3))
		+ Math.abs((theNotoriousArry[i].q4)-(theNotoriousArry[theNotoriousArry.length-1].q4))
		+ Math.abs((theNotoriousArry[i].q5)-(theNotoriousArry[theNotoriousArry.length-1].q5))

		if (totaldiff<smallestdiff) {
			smallestdiff = totaldiff
			choosenperson = theNotoriousArry[i];
		}

		}
		console.log(choosenperson);
		console.log(smallestdiff);
		smallestdiff = 99999;

		res.send(choosenperson);
		 // app.post("/survey", choosenperson);

   
	  });


}
