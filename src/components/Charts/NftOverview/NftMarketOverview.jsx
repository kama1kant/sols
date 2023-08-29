import React, { useEffect, useState } from 'react';
// import '../App.css';
import classNames from 'classnames';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '../../../assets/css/theme.css';
import '../../../assets/css/style.css';
import Iframe from '../../Utils/Iframe';
import Header from '../../Navs/Header';
import FeatureTab from './FeatureTab';
import TimeTab from './TimeTab';
import Footer from '../../Navs/Footer';
import { DuneEmbedUrl, Charts, GetGrid } from '../../../assets/js/constants';
import ReactGA from "react-ga4";
ReactGA.initialize('G-CT5C77DFZ6');
ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search, title: "NFTMarketOverview" });

const createChartContainer = (list, name) => {
    let dom = [];
    list.map((chart) => (
        dom.push(
            <div className={GetGrid(chart.grid)}>
                <Iframe
                    src={`${DuneEmbedUrl}${chart.id}`}
                    height={chart.height}
                    title={chart.title}
                />
            </div>
        )
    ));

    return (
        <>
            <div className='col-sm-12 col-md-12 mb-3 mb-sm-7 content-space-t-2 content-space-b-2'>
                <h1 className='display-1'>{name}</h1>
            </div>
            {dom}
        </>
    );
}

export default function NftMarketOverview() {
    const [currentFeature, setCurrentFeature] = useState(0);
    const [currentTime, setCurrentTime] = useState(1);
    const [chartDB, setchartDB] = useState(Charts.trendingNfts);
    const [chartHeading, setchartHeading] = useState('Overview');

    const updateCurrentFeature = (feature) => {
        setCurrentFeature(feature);
    }

    const updateCurrentTime = (time) => {
        setCurrentTime(time);
    }

    useEffect(() => {
        document.title = 'DeepRecord - Free NFT Analytics for everyone';
    }, []);

    useEffect(() => {
        if (currentFeature == 1) {
            setchartDB(Charts.topNfts[currentTime]);
            setchartHeading('Top NFTs');
        } else if (currentFeature == 2) {
            setchartDB(Charts.trendingMints[currentTime]);
            setchartHeading('Trending Mints');
        } else if (currentFeature == 3) {
            setchartDB(Charts.trendingWallets[currentTime]);
            setchartHeading('Top Owners');
        } else if (currentFeature == 4) {
            setchartDB(Charts.marketplaceOverview[currentTime]);
            setchartHeading('Marketplace Overview');
        } else {
            setchartDB(Charts.trendingNfts[currentTime]);
            setchartHeading('Trending NFTs');
            
        }
    }, [currentFeature, currentTime]);

    const features = (
        <div className='col-sm-12 col-md-12 mb-3 mb-sm-7'>
            <ul className="nav nav-segment">
                <li className="nav-item">
                    <a className={classNames("nav-link", "active")} href="#">
                        NFT Analytics
                    </a>
                </li>
                <li className="nav-item">
                    <a className={classNames("nav-link")} href="#">
                        DeFi Analytics
                    </a>
                </li>
                <li className="nav-item">
                    <a className={classNames("nav-link")} href="#">
                        Token Analytics
                    </a>
                </li>
                <li className="nav-item">
                    <a className={classNames("nav-link")} href="#">
                        CEX Analytics
                    </a>
                </li>
                <li className="nav-item">
                    <a className={classNames("nav-link")} href="#">
                        DApp Dashboard
                    </a>
                </li>
            </ul>
        </div>
    );

    return (
        <div className='text-start'>
            <div>
                {<Header />}
                <div className='container content-space-t-3 content-space-t-lg-4 content-space-b-2'>
                    <div className='mx-auto'>
                        {features}
                        {/* <h1 className='cdisplay-a1'>NFT Market Overview</h1> */}
                    </div>
                </div>
                <div className='shape-container'>
                    <div className='container'>
                        <div className='row content-space-b-2'>
                            <FeatureTab 
                                updateCurrentFeature={updateCurrentFeature} 
                            />
                            <TimeTab 
                                component={currentFeature} 
                                updateCurrentTime={updateCurrentTime} 
                            />
                            {createChartContainer(chartDB, chartHeading)}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}