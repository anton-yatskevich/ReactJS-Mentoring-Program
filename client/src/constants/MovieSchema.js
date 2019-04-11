import PropTypes from 'prop-types';

export default PropTypes.objectOf(
    PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.arrayOf(PropTypes.string)
    ])
);
