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

  const {token} = req.cookies;

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
    '{ id, email, name, lastName }'
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
