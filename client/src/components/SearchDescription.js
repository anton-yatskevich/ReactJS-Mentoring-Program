import React from 'react';
import PropTypes from 'prop-types';

const SearchDescription = ({ numberOfResults, sortField, onChangeSort }) => {
    const sortTypes = [{ value: 'release date', key: 1 }, { value: 'rating', key: 2 }];

    return (
        <div className="search-description__wrapper">
            <div className="search-description">
                <p className="search-description__info">
                    {`${numberOfResults} movies found`}
                </p>
                <div>
                    <span>Sort by:</span>
                    {
                        sortTypes.map(sortType => (
                            <button
                                type="button"
                                key={sortType.key}
                                onClick={() => onChangeSort(sortType.value)}
                                className={sortType.value === sortField ? 'sort-type--active' : ''}
                            >
                                {sortType.value}
                            </button>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

SearchDescription.propTypes = {
    numberOfResults: PropTypes.number,
    sortField: PropTypes.string,
    onChangeSort: PropTypes.func
};

SearchDescription.defaultProps = {
    numberOfResults: 0,
    sortField: '',
    onChangeSort: null
};

export default SearchDescription;
