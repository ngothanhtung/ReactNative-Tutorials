exports.handlerLogin = (request, response, database) => {
  // method: 'POST'
  // body: {username: 'admin', password: '123456789'}
  // const username = request.body.username;
  // const password = request.body.password;
  const { username, password } = request.body;
  // IF USE DATABASE: CODE ...
  // HARD CODE
  if (username === 'admin' && password === '123456789') {
    response.json({
      ok: true,
      message: 'Login OK'
    });
  } else {
    response.json({
      ok: false,
      message: 'Login Failed'
    });
  }
}

exports.handlerRegister = (request, response, database) => {
  // method: 'POST'
  // body: {username: 'admin', password: '123456789'}
  // const username = request.body.username;
  // const password = request.body.password;
  const { username, password } = request.body;
  // IF USE DATABASE: CODE ...
  // HARD CODE
  if (username === 'admin' && password === '123456789') {
    response.json({
      ok: true,
      message: 'Login OK'
    });
  } else {
    response.json({
      ok: false,
      message: 'Login Failed'
    });
  }
}