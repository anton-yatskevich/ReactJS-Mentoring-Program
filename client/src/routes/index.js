import AppContainer from '../components/AppContainer';
import HomePage from '../pages/HomePage';
import SearchPage from '../pages/SearchPage';
import MoviePage from '../pages/MoviePage';
import ErrorPage from '../pages/ErrorPage';

export default [
    {
        ...AppContainer,
        routes: [
            {
                ...HomePage,
                path: '/',
                exact: true
            },
            {
                ...SearchPage,
                path: '/search/:query?'
            },
            {
                ...MoviePage,
                path: '/film/:id'
            },
            {
                ...ErrorPage
            }
        ]
    }
];
