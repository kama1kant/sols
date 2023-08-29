import React, { useEffect, useState } from 'react';
// import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '../../../assets/css/theme.css';
import '../../../assets/css/style.css';
import Header from '../../Navs/Header';
import Footer from '../../Navs/Footer';
import Iframe from '../../Utils/Iframe';
import { DuneEmbedUrl, GetGrid } from '../../../assets/js/constants';
import FeatureTabCollection from './FeatureTabCollection';
import ReactGA from "react-ga4";
ReactGA.initialize('G-CT5C77DFZ6');
ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search, title: "NFTCollectionOverview" });

const createChartContainer = (list, name) => {
    let dom = [];
    list.map((chart) => (
        dom.push(
            <div className={GetGrid(chart.grid)}>
                <Iframe
                    src={`${DuneEmbedUrl}${chart.id}`}
                    height={chart.height}
                    title={chart.title}
                    frame={chart.frame}
                />
            </div>
        )
    ));

    return <>
        <div className='col-sm-12 col-md-12 mb-3 mb-sm-7 content-space-t-2 content-space-b-2'>
            <h1 className='display-1'>{name}</h1>
        </div>
        {dom}
    </>
}


export default function NftCollectionOverview(props) {
    const [currentFeature, setCurrentFeature] = useState(0);
    const [chartDB, setchartDB] = useState(props.collectionDB.overview);
    const [chartHeading, setchartHeading] = useState('Overview');

    const updateCurrentFeature = (feature) => {
        setCurrentFeature(feature);
    }

    useEffect(() => {
        document.title = 'DeepRecord - Free NFT Analytics for everyone';
    }, []);


    useEffect(() => {
        if (currentFeature == 1) {
            setchartDB(props.collectionDB.overview24H);
            setchartHeading('Overview 24H');
        }
         else if (currentFeature == 2) {
            setchartDB(props.collectionDB.salesVolume);
            setchartHeading('Sales & Volume');
        } else if (currentFeature == 3) {
            setchartDB(props.collectionDB.fees);
            setchartHeading('Fees Overview');
        } else if (currentFeature == 4) {
            setchartDB(props.collectionDB.marketplace);
            setchartHeading('Marketplace Overview');
        } else if (currentFeature == 5) {
            setchartDB(props.collectionDB.mint);
            setchartHeading('Mint Overview');
        } else if (currentFeature == 6) {
            setchartDB(props.collectionDB.owners);
            setchartHeading('Owners');
        } else {
            setchartDB(props.collectionDB.overview);
            setchartHeading('Overview');
        }
    }, [currentFeature]);
    

    return (
        <div className='text-start'>
            <div>
                {<Header />}
                <div className='container content-space-t-3 content-space-t-lg-4 content-space-b-2'>
                    <div className='mx-auto'>
                        <h1 className='cdisplay-a1'>NFT Collection Overview</h1>
                    </div>
                </div>
                <div className='shape-container'>
                    <div className='container'>
                        <div className='row content-space-b-2'>
                            <FeatureTabCollection updateCurrentFeature={updateCurrentFeature} />
                            {createChartContainer(chartDB, chartHeading)}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}