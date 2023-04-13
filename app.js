const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

// Set the template engine that we use in express app by set function after install pug package into app
// app.set('view engine', 'pug');
app.set('view engine', 'ejs');

app.set('views', 'views'); // Set the view ('template') files will be loaded

app.use(bodyParser.urlencoded({ extended: true }));
// insert the static file out of routes
app.use(express.static(path.join(__dirname, 'public')));

// Filtering with /admin , so all routes has to starart with to execute the admin routes
app.use('/admin', adminData.routes);
app.use(shopRoutes);

// It will work for unhandled routes
app.use((req, res, next) => {
	res.status(404).render('404', { pageTitle: 'Page not found', path: '' });
});

app.listen(3000, () => {
	console.log(`App running on port 3000...`);
});
