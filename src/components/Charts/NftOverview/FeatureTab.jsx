import React, { useState } from 'react';
// import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '../../../assets/css/theme.css';
import '../../../assets/css/style.css';
import classNames from 'classnames';
import mixpanel from 'mixpanel-browser';
import ReactGA from "react-ga4";
mixpanel.init('6e24a2975c4cfdb9a17b4232e9e459af', { debug: true });
ReactGA.initialize('G-CT5C77DFZ6');


export default function FeatureTab(props) {
    const [currentFeature, setCurrentFeature] = useState(0);
    const featureUpdate = (feature) => {
        setCurrentFeature(feature);
        props.updateCurrentFeature(feature);
    }

    return (
        <div className='col-sm-12 col-md-12 mb-3 mb-sm-7'>
            <ul className="nav nav-segment">
                <li className="nav-item">
                    <a 
                        className={classNames("nav-link", { "active": currentFeature == 0})} 
                        href="#" 
                        onClick={() => {
                            featureUpdate(0);
                            ReactGA.event({
                                category: "trending_nfts_by_sales",
                                action: "trending_nfts_by_sales",
                                label: "trending_nfts_by_sales",
                            });
                            mixpanel.track('FeatureTab', { 'Feature': 'Trending NFTs by Sales'});
                        }}
                    >
                        <i className="bi-graph-up-arrow nav-icon"></i> Trending NFTs by Sales
                    </a>
                </li>
                <li className="nav-item">
                    <a 
                        className={classNames("nav-link", { "active": currentFeature == 1 })} 
                        href="#" 
                        onClick={() => {
                            featureUpdate(1);
                            ReactGA.event({
                                category: "top_nfts_by_market_cap",
                                action: "top_nfts_by_market_cap",
                                label: "top_nfts_by_market_cap",
                            });
                            mixpanel.track('FeatureTab', { 'Feature': 'Top NFTs by Market Cap'});
                        }}
                    >
                        <i className="bi-bar-chart nav-icon"></i> Top NFTs by Market Cap
                    </a>
                </li>
                <li className="nav-item">
                    <a 
                        className={classNames("nav-link", { "active": currentFeature == 2 })} 
                        href="#" 
                        onClick={() => {
                            featureUpdate(2);
                            ReactGA.event({
                                category: "trending_mints",
                                action: "trending_mints",
                                label: "trending_mints",
                            });
                            mixpanel.track('FeatureTab', {'Feature': 'Trending Mints'});
                        }}
                    >
                        <i className="bi-pie-chart nav-icon"></i> Trending Mints
                    </a>
                </li>
                <li className="nav-item">
                    <a 
                    className={classNames("nav-link", { "active": currentFeature == 3 })} 
                    href="#" 
                    onClick={() => {
                        featureUpdate(3);
                        ReactGA.event({
                            category: "top_owners",
                            action: "top_owners",
                            label: "top_owners",
                        });
                        mixpanel.track('FeatureTab', {'Feature': 'Top Owners'});
                    }}
                    >
                        <i className="bi-wallet2 nav-icon"></i> Top Owners
                    </a>
                </li>
                <li className="nav-item">
                    <a 
                        className={classNames("nav-link", { "active": currentFeature == 4 })} 
                        href="#" 
                        onClick={() => {
                            featureUpdate(4);
                            ReactGA.event({
                                category: "marketplace_overview",
                                action: "marketplace_overview",
                                label: "marketplace_overview",
                            });
                            mixpanel.track('FeatureTab', {'Feature': 'Marketplace Overview'});
                            }}
                    >
                        <i className="bi-shop nav-icon"></i> Marketplace Overview
                    </a>
                </li>
            </ul>
        </div>
    );
}