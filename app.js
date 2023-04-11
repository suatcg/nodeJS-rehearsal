const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware
// app.use((req, res, next) => {
// 	console.log('In the middleware');
// 	next(); // Allows the request to continue to the next middleware in line.
// });

// app.use((req, res, next) => {
// 	console.log('This always runs');
// 	next();
// });

// Request Body Parser Middleware
// this parser does not support for the json , and file types parsing , in case you need it.
app.use(bodyParser.urlencoded({ extended: true }));

// Route Middlewares
app.use('/add-product', (req, res, next) => {
	// console.log('In another middleware');
	res.send(
		'<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
	);
});

// Limited only post requests
app.post('/product', (req, res, next) => {
	console.log(req.body);
	res.redirect('/');
});

app.use('/', (req, res, next) => {
	// console.log('In another middleware');
	res.send('<h1>Hello from express</h1>');
});

app.listen(3000, () => {
	console.log(`App running on port 3000...`);
});
