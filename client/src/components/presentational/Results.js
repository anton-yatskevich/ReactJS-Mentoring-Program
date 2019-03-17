import React from 'react';
import PropTypes from 'prop-types';

const ResultsList = ({ results }) => (
    <main>
        {results.map(item => <li key={item.key}>{item.text}</li>)}
    </main>
);

ResultsList.propTypes = {
    results: PropTypes.arrayOf
};

ResultsList.defaultProps = {
    results: null
};

export default ResultsList;
