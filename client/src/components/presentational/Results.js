import React from 'react';

const ResultsList = ({ results }) => (
    <main>
        {results.map(item => <li key={item.key}>{item.text}</li>)}
    </main>
);

export default ResultsList;
