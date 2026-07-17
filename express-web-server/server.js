import express from 'express';
import routes from './routes.js'

const app = express();
const port = 3000;
const host = 'localhost';

app.use('/', routes);

app.listen(port, () => {
    console.log(`Server running at http://${host}:${port}`);
});