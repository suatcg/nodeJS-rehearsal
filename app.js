const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controller/error');

const adminRoutes = require('./routes/admin');
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
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// It will work for unhandled routes
app.use(errorController.get404);

app.listen(3000, () => {
	console.log(`App running on port 3000...`);
});
