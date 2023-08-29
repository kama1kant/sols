import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NftMarketOverview from './Charts/NftOverview/NftMarketOverview';
import NftCollectionOverview from './Charts/NftCollection/NftCollectionOverview';
import LandingPage from './LandingPage/LandingPage';
import { ChartsNftCollection } from '../assets/js/constants';

function Main() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/dashboard" element={<NftMarketOverview />} />
                <Route path="/wow" element={<NftCollectionOverview collectionDB={ChartsNftCollection.wow} />} />
            </Routes>
        </div>
    )
}

export default Main;