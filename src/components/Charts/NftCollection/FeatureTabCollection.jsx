import React, { useEffect, useState } from 'react';
// import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '../../../assets/css/theme.css';
import '../../../assets/css/style.css';
import classNames from 'classnames';
import mixpanel from 'mixpanel-browser';
mixpanel.init('6e24a2975c4cfdb9a17b4232e9e459af', { debug: true }); 


export default function FeatureTabCollection(props) {
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
                            mixpanel.track('CollecionFeatureTab', { 'Feature': 'Overview' });
                        }}
                    >
                        <i className="bi-house nav-icon"></i> Overview
                    </a>
                </li>
                <li className="nav-item">
                    <a 
                        className={classNames("nav-link", { "active": currentFeature == 1 })} 
                        href="#" 
                        onClick={() => {
                            featureUpdate(1);
                            mixpanel.track('CollecionFeatureTab', { 'Feature': 'Overview 24H' });
                        }}
                    >
                        <i className="bi-person nav-icon"></i> Overview 24H
                    </a>
                </li>
                <li className="nav-item">
                    <a 
                        className={classNames("nav-link", { "active": currentFeature == 2 })} 
                        href="#" 
                        onClick={() => {
                            featureUpdate(2);
                            mixpanel.track('CollecionFeatureTab', { 'Feature': 'Sales & Volume' });
                        }}
                    >
                        <i className="bi-sliders nav-icon"></i> Sales & Volume
                    </a>
                </li>
                <li className="nav-item">
                    <a 
                        className={classNames("nav-link", { "active": currentFeature == 3 })} 
                        href="#" 
                        onClick={() => {
                            featureUpdate(3);
                            mixpanel.track('CollecionFeatureTab', { 'Feature': 'Fees Overview' });
                        }}
                    >
                        <i className="bi-sliders nav-icon"></i> Fees Overview
                    </a>
                </li>
                <li className="nav-item">
                    <a 
                        className={classNames("nav-link", { "active": currentFeature == 4 })} 
                        href="#" 
                        onClick={() => {
                            featureUpdate(4);
                            mixpanel.track('CollecionFeatureTab', { 'Feature': 'Marketplace Overview' });
                        }}
                    >
                        <i className="bi-sliders nav-icon"></i> Marketplace Overview
                    </a>
                </li>
                <li className="nav-item">
                    <a 
                        className={classNames("nav-link", { "active": currentFeature == 5 })} 
                        href="#" 
                        onClick={() => {
                            featureUpdate(5);
                            mixpanel.track('CollecionFeatureTab', { 'Feature': 'Mint Overview' });
                        }}
                    >
                        <i className="bi-sliders nav-icon"></i> Mint Overview
                    </a>
                </li>
                <li className="nav-item">
                    <a 
                    className={classNames("nav-link", { "active": currentFeature == 6 })} 
                    href="#" 
                    onClick={() => {
                        featureUpdate(6);
                        mixpanel.track('CollecionFeatureTab', { 'Feature': 'Owners' });
                    }}
                >
                        <i className="bi-sliders nav-icon"></i> Owners
                    </a>
                </li>
            </ul>
        </div>
    );
}