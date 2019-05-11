import express from 'express';
import { matchRoutes } from 'react-router-config';
import routes from '../client/src/routes';
import renderer from './utils/renderer';
import createStore from './utils/createStore';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
    const store = createStore(req);

    const promises = matchRoutes(routes, req.path)
        .map(({ route }) => {
            const { fetchData } = route.component;
            return fetchData instanceof Function ? fetchData(store) : null;
        });

    Promise.all(promises).then(() => {
        const context = {};
        const content = renderer(req, store, context);

        if (context.status === 404) {
            res.status(404);
        }

        res.send(content);
    });
});

app.listen(3030, () => {
    console.log('App listening on port 3030...');
});
