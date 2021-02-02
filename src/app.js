import 'dotenv/config';

import express from 'express';

import routes from './routes';

import './database/index';

const app = express();

app.use(express.json());

app.use(routes);

export default app;
