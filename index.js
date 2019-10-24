"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(express.static(__dirname));
app.set("view engine", "hbs");
app.get("/", urlencodedParser, function(request, response) {
	response.sendFile(__dirname + "/Lab3.html");
});
app.post("/", (req, res) => {
	res.redirect(307, "/answer");
});
app.post("/answer", urlencodedParser, function(request, response) {
	if (!request.body) return response.sendStatus(400);
	response.render("answer.hbs", {
		res1: request.body.res1,

		res2: request.body.res2,
		res3: request.body.res3,
		res4: request.body.res4
	});
});
app.listen(3000);
