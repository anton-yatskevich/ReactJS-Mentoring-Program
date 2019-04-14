import sortHelper from './sortHelper';

describe('SortMoviesComporator', () => {
    const input = [
        { release_date: '2016-02-07', vote_average: 2, id: 1 },
        { release_date: '2014-02-07', vote_average: 3, id: 2 },
        { release_date: '2018-02-07', vote_average: 2, id: 3 }
    ];

    it('should sort array by release_date field if sortfield is release date', () => {
        const result = sortHelper(input, 'release_date');
        expect(result[0].id).toBe(3);
    });

    it('should compare array by vote_average field if sortfield is rating', () => {
        const result = sortHelper(input, 'rating');
        expect(result[0].id).toBe(2);
    });
});
