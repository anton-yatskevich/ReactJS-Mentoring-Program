import express from 'express';
import next from 'next';
import routes from '../client/src/routes';

const port = 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: './client/src', dev });
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
    const server = express();
    server.use('/', express.static('static'));
    server.get('*', (req, res) => handler(req, res));

    server.listen(port, () => {
        console.log(`> App listening on http://localhost:${port}`);
    });
});
