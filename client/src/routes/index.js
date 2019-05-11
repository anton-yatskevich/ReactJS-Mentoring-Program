import AppContainer from '../components/AppContainer';
import HomePage from '../pages/HomePage';
import SearchPage from '../pages/SearchPage';
import MoviePage from '../pages/MoviePage';
import ErrorPage from '../pages/ErrorPage';

export default [
    {
        component: AppContainer,
        routes: [
            {
                component: HomePage,
                path: '/',
                exact: true
            },
            {
                component: SearchPage,
                path: '/search/:query?'
            },
            {
                component: MoviePage,
                path: '/film/:id?'
            },
            {
                component: ErrorPage
            }
        ]
    }
];
