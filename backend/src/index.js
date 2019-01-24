// let's go!
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

require('dotenv').config({ path: 'variables.env' });
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

// TODO use express middleware to handle cookies

server.express.use(cookieParser());

// TODO use express middleware to populate current user

server.express.use((req, res, next) => {
   let token;
  if(process.env.NODE_ENV === 'development') {
    token = req.cookies;
  } else {
    token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InNlcnZpY2UiOiJwYWxhemFyLXByb2RAcHJvZCIsInJvbGVzIjpbImFkbWluIl19LCJpYXQiOjE1NDgzNjE1NTcsImV4cCI6MTU0ODk2NjM1N30.QmxO9anjG5ze7Cw84g8qQ8CJWKV56pW7tXASoViJTv0";
  }
  if(token) {
    const { userId } = jwt.verify(token, process.env.APP_SECRET);
    req.userId = userId;
  }
  next();
});

server.express.use( async (req, res, next) => {
  if(!req.userId){
    return next();
  }

  const user = await db.query.user(
    { where: { id: req.userId }},
    '{ id, permissions, email, name }'
  );

  req.user = user;

  next();
});

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL,
    },
  },
  deets => {
    console.log(`Server is now running on port http://localhost:${deets.port}`);
  }
);
