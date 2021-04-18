var createError = require('http-errors');
var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var BasicStrategy = require('passport-http').BasicStrategy;

var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;

var { findDocuments } = require('./helpers/MongoDbHelper');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Passportjs

// Passport

// app.use(express.session({ secret: 'keyboard cat' }));
app.use(passport.initialize());
// app.use(passport.session());

// Passport: Http
passport.use(
  new BasicStrategy(function (email, password, done) {
    console.log('BasicStrategy');
    findDocuments({ email: email, password: password }, 'users')
      .then((result) => {
        if (result.length > 0) {
          return done(null, result[0]);
        } else {
          return done(null, false);
        }
      })
      .catch((err) => {
        return done(err);
      });
  }),
);

// Passport: Local
passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    function (email, password, done) {
      console.log('LocalStrategy');
      findDocuments({ email: email, password: password }, 'users')
        .then((result) => {
          if (result.length > 0) {
            return done(null, result[0]);
          } else {
            return done(null, false);
          }
        })
        .catch((err) => {
          return done(err);
        });
    },
  ),
);

// Passport: jwt
var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';
opts.issuer = 'softech.cloud';
opts.audience = 'training.softech.cloud';

passport.use(
  new JwtStrategy(opts, function (jwt_payload, done) {
    User.findOne({ id: jwt_payload.sub }, function (err, user) {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
        // or you could create a new account
      }
    });
  }),
);

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/products', require('./routes/products'));
app.use('/api/categories', require('./routes/categories'));
app.use('/api/riders', require('./routes/riders'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
