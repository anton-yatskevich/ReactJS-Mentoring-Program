import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash.noop';
import uuidv1 from 'uuid/v1';

import Button from '../Button';
import './styles.scss';

const SortTypeSelect = ({ sortField, onChangeSort }) => {
    const sortTypes = ['release date', 'rating'];

    return (
        <div>
            <span>Sort by:</span>
            {
                sortTypes.map(sortType => (
                    <Button
                        key={uuidv1()}
                        onClickHandler={onChangeSort}
                        value={sortType}
                        textValue={sortType}
                        isActive={sortType === sortField}
                        className="sort-type__button"
                    />
                ))
            }
        </div>
    );
};

SortTypeSelect.propTypes = {
    sortField: PropTypes.string,
    onChangeSort: PropTypes.func
};

SortTypeSelect.defaultProps = {
    sortField: '',
    onChangeSort: noop
};

export default SortTypeSelect;
