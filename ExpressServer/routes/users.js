var express = require('express');
var passport = require('passport');
var jwt = require('jsonwebtoken');

const { body, validationResult, checkSchema } = require('express-validator');
var router = express.Router();
var { findDocuments, findDocument, insertDocument, updateDocument, deleteDocument } = require('../helpers/MongoDbHelper');

router.get('/', function (req, res) {
  findDocuments({}, 'users')
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({
        ok: false,
        error,
      });
    });
});

router.get('/:id', function (req, res) {
  var id = req.params.id;
  findDocument(id, 'users')
    .then((result) => {
      res.json({ ok: true, result });
    })
    .catch((error) => {
      res.status(400).json({ ok: false, error });
    });
});

// ------------------------------------------------------------------------------------------------
// LOGIN
// ------------------------------------------------------------------------------------------------
const loginValidationSchema = checkSchema({
  email: {
    isEmail: { errorMessage: 'Email is not valid' },
  },
  password: {
    isLength: { options: { min: 4 }, errorMessage: 'Password is too short (Password must be >= 4 letters)' },
  },
});

router.post('/login', loginValidationSchema, function (req, res) {
  var email = req.body.email;
  var password = req.body.password;

  findDocuments({ email: email, password: password }, 'users').then((result) => {
    if (result.length > 0) {
      const user = result[0];

      console.log(user);
      // jwt
      var payload = {
        user: {
          fullname: user.fullname,
          email: user.email,
        },
      };

      var secret = 'secret';
      var token = jwt.sign(payload, secret, {
        expiresIn: 86400, // expires in 24 hours
        audience: 'training.softech.cloud',
        issuer: 'softech.cloud',
        subject: user._id.toString(),
        algorithm: 'HS512',
      });

      res.json({ ok: true, result, token: token });
    } else {
      res.json({ ok: false, result, errors: [{ msg: 'Login failed' }] });
    }
  });
});

// curl --user john@gmail.com:1234 --basic -X POST https://training.softech.cloud/api/users/passport-login
// Basic: username / password
router.post('/passport-login', passport.authenticate('basic', { session: false }), function (req, res) {
  res.json({ user: req.user });
});

router.post('/passport-jwt', passport.authenticate('jwt', { session: false }), function (req, res) {
  res.json({ user: req.user });
});

// ------------------------------------------------------------------------------------------------
// REGISTER
// ------------------------------------------------------------------------------------------------
const registerValidationSchema = checkSchema({
  email: {
    isEmail: { errorMessage: 'Email is not valid' },
  },
  password: {
    isLength: { options: { min: 4 }, errorMessage: 'Password is too short (Password must be >= 4 letters)' },
  },
  fullname: {
    isLength: { options: { min: 1 }, errorMessage: 'Fullname is required' },
  },
});

router.post('/register', registerValidationSchema, function (req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  var data = {
    email: req.body.email,
    password: req.body.password,
    fullname: req.body.fullname,
  };

  findDocuments({ email: data.email }, 'users').then((result) => {
    if (result.length > 0) {
      res.status(400).json({ ok: false, errors: [{ value: data.email, msg: 'Email is exists', param: 'email', location: 'body' }] });
    } else {
      insertDocument(data, 'users').then((result) => {
        res.json({ ok: true, result: result.data });
      });
    }
  });
});

// ------------------------------------------------------------------------------------------------
// FORGOT PASSWORD
// ------------------------------------------------------------------------------------------------
router.post('/forgot-password', function (req, res) {
  var email = req.body.email;
  // FIND USER
  findDocuments({ email: email }, 'users').then((result) => {
    if (result.length > 0) {
      // FOUND USER
      // SEND EMAIL
      var subject = 'Forgot your password';
      var html = `<html>`;
      html += `<header><link href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' rel='stylesheet' /></header>`;
      html += `<body class='container' style='margin-top: 48px'>`;
      html += `<h3 class='text-center'>Click here to reset your password: https://training.softech.cloud/api/users/reset-password/${result[0]._id}</h3>`;
      html += `</body>`;

      sendMail(result[0].email, subject, html);
      res.status(200).json({
        success: true,
        message: 'The link to reset your password was sent to the email: ' + email,
        // result: result,
      });
    } else {
      res.json({
        success: false,
        message: 'Cannot found email',
        // result: result,
      });
    }
  });
});

// ------------------------------------------------------------------------------------------------
// CHANGE PASSWORD
// ------------------------------------------------------------------------------------------------
const changePasswordValidationSchema = checkSchema({
  email: {
    isEmail: { errorMessage: 'Email is not valid' },
  },
  password: {
    isLength: { options: { min: 1 }, errorMessage: 'Old Password is required' },
  },
  newPassword: {
    isLength: { options: { min: 4 }, errorMessage: 'New Password is too short (New Password must be >= 4 letters)' },
  },
});

router.post('/change-password', changePasswordValidationSchema, function (req, res) {
  var data = {
    email: req.body.email,
    password: req.body.password,
    newPassword: req.body.newPassword,
  };

  // FIND USER
  findDocuments({ email: data.email, password: data.password }, 'users')
    .then((result) => {
      if (result.length > 0) {
        const user = result[0];
        console.log(user._id);
        updateDocument(user._id, { password: data.newPassword }, 'users')
          .then((result) => {
            res.status(200).json({ ok: true });
          })
          .catch((err) => {
            res.status(500).json({ error: err });
          });
      } else {
        res.json({ ok: false });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

// ------------------------------------------------------------------------------------------------
// RESET PASSWORD
// ------------------------------------------------------------------------------------------------
router.get('/reset-password/:id', function (req, res) {
  var id = req.params.id;

  // FIND USER
  findDocument(id, 'users').then((result) => {
    if (result) {
      console.log(result);
      // FOUND USER
      const email = result.email;
      // UPDATE NEW PASSWORD
      var newPassword = Math.random().toString(36).substring(2, 6) + Math.random().toString(36).substring(2, 6);
      updateDocument(id, { password: newPassword }, 'users').then((result) => {
        var subject = 'Reset your password';

        var htmlMail = `<html>`;
        htmlMail += `<header><link href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' rel='stylesheet' /></header>`;
        htmlMail += `<body class='container' style='margin-top: 48px'>`;
        htmlMail += `<h3 class='text-center'>Your new password: ${newPassword}</h3>`;
        htmlMail += `</body>`;
        htmlMail += `</html>`;
        sendMail(email, subject, htmlMail);

        var html = `<html>`;
        html += `<header><link href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' rel='stylesheet' /></header>`;
        html += `<body class='container' style='margin-top: 48px'>`;
        html += `<h3 class='text-center'>Your new password was sent to your email: ${email}</h3>`;
        html += `</body>`;
        html += `</html>`;
        res.send(html);
      });
    } else {
      // NOT FOUND USER
      var html = `<html>`;
      html += `<header><link href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' rel='stylesheet' /></header>`;
      html += `<body class='container' style='margin-top: 48px'>`;
      html += `<h3 class='text-center'>Cannot find user id</h3>`;
      html += `</body>`;
      html += `</html>`;
      res.send(html);
    }
  });
});

// ------------------------------------------------------------------------------------------------
// DELETE USER
// ------------------------------------------------------------------------------------------------
router.delete('/:id', function (req, res) {
  var id = req.params.id;
  deleteDocument(id, 'users')
    .then((result) => {
      res.status(200).json({ ok: result.result.n > 0, result: result.result });
    })
    .catch((err) => {
      res.status(400).json({ ok: false, error: err });
    });
});

function sendMail(toEmail, subject, body) {
  const nodemailer = require('nodemailer');
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 465,
      secure: false,
      requireTLS: true,
      auth: {
        user: 'aptech.reactnative@gmail.com', // generated ethereal user
        pass: 'Aptech@38yenbai', // generated ethereal password
      },
    });

    // setup email data with unicode symbols
    let mailOptions = {
      from: '"APTECH - REACT NATIVE TUTORIALS" <aptech.reactnative@gmail.com>', // sender address
      to: toEmail, // list of receivers
      subject: subject, // Subject line
      html: body, // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  });
}

module.exports = router;
