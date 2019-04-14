import moment from 'moment';

function filterDatesHelper(a, b) {
    const momentA = moment(a.release_date, 'YYYY-MM-DD');
    const momentB = moment(b.release_date, 'YYYY-MM-DD');

    return momentB - momentA;
}

export default (movies, sortField) => (
    [...movies].sort((a, b) => {
        switch (sortField) {
        case 'rating':
            return b.vote_average - a.vote_average;
        case 'release_date':
            return filterDatesHelper(a, b);
        default:
            return 0;
        }
    })
);
