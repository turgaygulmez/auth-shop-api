import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import session from 'express-session';

import { products, users, productTypes, baskets, authentication, self } from './src/routes';
import { authMiddleware } from './src/middlewares'
import { initDB } from "./src/bootstrap";

const app = express();

app.set('trust proxy', 1);

app.use(function(req, res, next) {  
  res.header("Access-Control-Allow-Headers","*");
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  next();
});

app.use(session({
  secret: "auth",
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false, maxAge: 86400000, httpOnly: false }
}));

app.use(cors({
  origin:['http://localhost:3000'],
  methods:['GET','POST', 'PUT', 'DELETE'],
  credentials: true // enable set cookie
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// create db if it doesnt exists
initDB();

app.use(authMiddleware);

app.use('/users', users);
app.use('/products', products);
app.use('/productTypes', productTypes);
app.use('/baskets', baskets);
app.use('/authentication', authentication);
app.use('/self', self);

app.listen(process.env.PORT, () =>
  console.log(`app listening on port ${process.env.PORT}!`),
);