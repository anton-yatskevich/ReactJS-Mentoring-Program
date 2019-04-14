import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash.noop';
import uuidv1 from 'uuid/v1';

import Button from '../Button';
import './styles.scss';

const SortTypeSelect = ({ sortField, setSortField }) => {
    const sortTypes = [{ text: 'release date', value: 'release_date' }, { text: 'rating', value: 'rating' }];

    return (
        <div>
            <span>Sort by:</span>
            {
                sortTypes.map(sortType => (
                    <Button
                        key={uuidv1()}
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
