import moment from 'moment';

function filterDatesHelper(a, b) {
    const momentA = moment(a.release_date, 'YYYY-MM-DD');
    const momentB = moment(b.release_date, 'YYYY-MM-DD');

    return momentB - momentA;
}

export const sortMoviesComporator = (a, b, sortField) => {
    switch (sortField) {
    case 'rating':
        return b.vote_average - a.vote_average;
    case 'release date':
        return filterDatesHelper(a, b);
    default:
        return 0;
    }
};

export const filterMoviesComporator = (movie, searchValue, searchField) => {
    const field = movie[searchField];

    if (Array.isArray(field)) {
        return field.some(item => item.toLowerCase().indexOf(searchValue) !== -1);
    }
    return field.toLowerCase().indexOf(searchValue) !== -1;
};
