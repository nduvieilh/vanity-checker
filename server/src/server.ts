process.env.NODE_PATH = "build";

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import routes from './router';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// Routes
app.use(routes);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));