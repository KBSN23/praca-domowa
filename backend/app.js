const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	next();
});

app.post('/', function (req, res, next) {
	console.log(req.body);
	res.json({
		ok: true,
		type: req.body.type,
		value : req.body.value
	});
	// Do testowania opóźnienia
	// setTimeout(() => {
	//   res.json({
	// 	ok: true,
	// 	type: req.body.type,
	// 	value : req.body.value
	//   });
	// }, 5000);
});

const port = 8080;

// Zapytania z frontend kierowane są na 127.0.0.1:8080
app.listen(port, () => {
	console.log(`Aplikacja nasłuchuje na porcie ${port}`);
});
