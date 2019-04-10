var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');
var categoriesRouter = require('./routes/categories');
var checkoutRouter = require('./routes/checkout');

var app = express();
var JwtHelper = require('./helpers/JwtHelper');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// ---------------------------------------------------------
// authentication (no middleware necessary since this isnt authenticated)
// ---------------------------------------------------------
app.post('/login', function(req, res) {
	// check login here
	JwtHelper.login(req, res);
});

// ---------------------------------------------------------
// route middleware to authenticate and check token
// ---------------------------------------------------------
app.use('/', indexRouter);

app.use('/users', usersRouter);
// JWT
// app.use(function(req, res, next) {
// 	JwtHelper.check(req, res, next);
// });

app.use('/products', productsRouter);
app.use('/categories', categoriesRouter);
app.use('/checkout', checkoutRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
