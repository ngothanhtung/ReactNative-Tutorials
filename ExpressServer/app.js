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

var GoogleAuthenticator = require('passport-2fa-totp').GoogeAuthenticator;
var TwoFAStartegy = require('passport-2fa-totp').Strategy;

var { findDocuments, findDocument } = require('./helpers/MongoDbHelper');

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
  new JwtStrategy(opts, function (payload, done) {
    findDocument(payload.sub, 'users')
      .then((result) => {
        if (result) {
          return done(null, result);
        } else {
          return done(null, false);
        }
      })
      .catch((err) => {
        console.log(err);
        return done(null, false);
      });
  }),
);

// Passport: 2fa-totp
passport.use(
  new TwoFAStartegy(
    {
      usernameField: 'email',
      passwordField: 'password',
      codeField: 'code',
    },
    function (email, password, done) {
      console.log('2FA - Strategy');
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
    function (user, done) {
      console.log(user);
      // 2nd step verification: TOTP code from Google Authenticator

      if (!user.secret) {
        done(new Error('Google Authenticator is not setup yet.'));
      } else {
        // Google Authenticator uses 30 seconds key period
        // https://github.com/google/google-authenticator/wiki/Key-Uri-Format

        var secret = GoogleAuthenticator.decodeSecret(user.secret);

        done(null, secret, 30);
      }
    },
  ),
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
