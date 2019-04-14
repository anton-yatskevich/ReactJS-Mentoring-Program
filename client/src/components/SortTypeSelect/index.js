import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash.noop';

import Button from '../Button';
import './styles.scss';

const SortTypeSelect = ({ sortField, setSortField }) => {
    const sortTypes = [
        { text: 'release date', value: 'release_date', id: 'unique1' },
        { text: 'rating', value: 'rating', id: 'unique2' }
    ];

    return (
        <div>
            <span>Sort by:</span>
            {
                sortTypes.map(sortType => (
                    <Button
                        key={sortType.id}
                        onClickHandler={setSortField}
                        value={sortType.value}
                        textValue={sortType.text}
                        isActive={sortType.value === sortField}
                        className="sort-type__button"
                    />
                ))
            }
        </div>
    );
};

SortTypeSelect.propTypes = {
    sortField: PropTypes.string,
    setSortField: PropTypes.func
};

SortTypeSelect.defaultProps = {
    sortField: '',
    setSortField: noop
};

export default SortTypeSelect;
