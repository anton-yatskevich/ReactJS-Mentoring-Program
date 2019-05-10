import React from 'react';
import Header from '../components/Header';
import SearchPanel from '../containers/SearchPanel';
import Footer from '../components/Footer';

const HomePage = () => (
    <>
        <Header isSearchPage={false} />
        <main>
            <SearchPanel />
        </main>
        <Footer />
    </>
);

export default HomePage;
