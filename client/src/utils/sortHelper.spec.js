import sortMoviesHelper from './sortHelper';

describe('SortMoviesComporator', () => {
    it('should return 0 if dates are equal and sortField is undefined', () => {
        const result = sortMoviesComporator(1, 1);
        expect(result).toBe(0);
    });

    it('should compare dates by release_date field if sortfield is release date', () => {
        const a = { release_date: '2018-02-07' };
        const b = { release_date: '2016-02-07' };
        const result = sortMoviesComporator(a, b, 'release date');
        expect(result).toBeLessThan(0);
    });

    it('should compare dates by release_date field if sortfield is release date and return 0 if dates are equal', () => {
        const a = { release_date: '2016-02-07' };
        const b = { release_date: '2016-02-07' };
        const result = sortMoviesComporator(a, b, 'release date');
        expect(result).toBe(0);
    });

    it('should compare dates by release_date field if sortfield is release date', () => {
        const a = { release_date: '2018-02-07' };
        const b = { release_date: '2016-02-07' };
        const result = sortMoviesComporator(a, b, 'release date');
        expect(result).toBeLessThan(0);
    });

    it('should compare dates by vote_average field if sortfield is rating', () => {
        const a = { vote_average: 9 };
        const b = { vote_average: 8 };
        const result = sortMoviesComporator(a, b, 'rating');
        expect(result).toBe(-1);
    });

    it('should compare dates by vote_average field if sortfield is rating and return 0 if ratings are equal', () => {
        const a = { vote_average: 8 };
        const b = { vote_average: 8 };
        const result = sortMoviesComporator(a, b, 'rating');
        expect(result).toBe(0);
    });

    it('should return false if search field does not include query', () => {
        const movie = {
            a: 'value'
        };
        const result = filterMoviesComporator(movie, 'searchValue', 'a');
        expect(result).toBe(false);
    });

    it('should return true if search field is array and includes query', () => {
        const movie = {
            a: ['value']
        };
        const result = filterMoviesComporator(movie, 'value', 'a');
        expect(result).toBe(true);
    });
});
