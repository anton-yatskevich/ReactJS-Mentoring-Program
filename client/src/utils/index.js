export const sortMoviesComporator = (a, b, sortField) => {
    switch (sortField) {
    case 'rating':
        return b.vote_average - a.vote_average;
    case 'release date':
        return Number(b.release_date.slice(0, 4)) - Number(a.release_date.slice(0, 4));
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
