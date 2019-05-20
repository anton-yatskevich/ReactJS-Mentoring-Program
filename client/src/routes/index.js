const nextRoutes = require('next-routes');

const routes = nextRoutes();

const APP_ROUTES = [{
    page: 'HomePage',
    pattern: '/'
}, {
    page: 'SearchPage',
    pattern: '/search/:query?'
}, {
    page: 'MoviePage',
    pattern: '/film/:id?'
}];

APP_ROUTES.forEach(route => routes.add(route));

module.exports = routes;
