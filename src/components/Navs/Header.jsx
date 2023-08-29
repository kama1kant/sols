import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '../../assets/css/theme.css';
import '../../assets/css/style.css';
import logo from '../../assets/svg/logos/deeprecord-logo-text-white.svg';
import { ChartsNftCollection } from '../../assets/js/constants';
import NftCollectionOverview from '../Charts/NftCollection/NftCollectionOverview';
import ReactGA from "react-ga4";
ReactGA.initialize('G-CT5C77DFZ6');


export default function Header() {
    const navigate = useNavigate();
    return (
        <header id='header' className='navbar navbar-expand-lg navbar-end navbar-absolute-top navbar-dark bg-black border-bottom'>
            <div className='container'>
                <nav className='js-mega-menu navbar-nav-wrap'>
                    <a className='navbar-brand' href='#' aria-label='Solys Labs' onClick={() => navigate('/')}>
                        <img className='navbar-brand-logo' src={logo} alt='Logo' />
                    </a>

                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown'
                        aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-default'>
                            <i className='bi-list'></i>
                        </span>
                        <span className='navbar-toggler-toggled'>
                            <i className='bi-x'></i>
                        </span>
                    </button>

                    <div className='collapse navbar-collapse' id='navbarNavDropdown'>
                        <ul className='navbar-nav'>
                            {/* <li className="nav-item">
                                <a id="landingsMegaMenu" className="nav-link" aria-current="page" href="#" role="button" aria-expanded="false">NFT Overview</a>
                            </li>*/}
                            <li className="nav-item">
                                {/* <a 
                                    id="landingsMegaMenu" 
                                    className="nav-link" 
                                    aria-current="page" 
                                    href="/wow" 
                                    role="button" 
                                    aria-expanded="false" 
                                    // onClick={() => navigate('/#/wow')}>
                                    onClick={() => <NftCollectionOverview collectionDB={ChartsNftCollection.wow} />}>
                                    NFT Collection
                                </a> */}
                            </li>
                            <li className="nav-item">
                                <button
                                    type="button"
                                    className="btn btn-primary btn-sm"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.open('https://discord.gg/RH8AJGtzF3', '_blank');
                                        ReactGA.event({
                                            category: "discord_header",
                                            action: "discord_header",
                                            label: "discord_header",
                                        });
                                    }}
                                >
                                    <i className="bi bi-discord me-2"></i>
                                    Join the Beta
                                </button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}