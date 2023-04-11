const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Filtering with /admin , so all routes has to starart with to execute the admin routes
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// It will work for unhandled routes
app.use((req, res, next) => {
	res.status(404).send('<h1>Page not found</h1>');
});

app.listen(3000, () => {
	console.log(`App running on port 3000...`);
});
