import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '../../assets/css/theme.css';
// import '../../assets/css/style.css';
import './LandingPage.css';
import assetsLogo from '../../assets/svg/logos/solyslabs-logo-white.svg';
import assetsMockup from '../../assets/img/mockup.svg';
import ReactGA from "react-ga4";
ReactGA.initialize('G-CT5C77DFZ6');
ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search, title: "LandingPage" });

const callToActionButton = 'Get Early Access ';

function Body() {
    const navigate = useNavigate();
    useEffect(() => {
        document.title = 'Solys Labs - Blockchain Data Analytics';
    }, []);
    return (
        <div className='body text-start'>
            <div>
                <header id='header' className='navbar navbar-expand-lg navbar-end navbar-absolute-top navbar-light'>
                    <div className='container'>
                        <nav className='js-mega-menu navbar-nav-wrap'>
                            <a className='navbar-brand' href='#' aria-label='Solys Labs'>
                                <img className='navbar-brand-logo' src={assetsLogo} alt='Logo'/>
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
                                </ul>
                            </div>
                        </nav>
                    </div>
                </header>

                 <div className='container content-space-t-3 content-space-t-lg-4 content-space-b-2'>
                    <div className='mx-auto'>
                        <h1 className='cdisplay-1'>Blockchain Data Analytics</h1>
                        <p className='display-6 text-white'>Index & Query Blockchain data within minutes.</p>
                        <a className='btn btn-light btn-transition btn-lg my-6 fw-bold'
                            href='https://tpffe8264hy.typeform.com/to/JeFTGiid' target='_blank'
                        >{callToActionButton}
                            <i className='bi bi-arrow-right'></i></a>
                    </div>
                </div>
                <div className='w-100 mx-auto'>
                    <img className='img-fluid' src={assetsMockup} alt='Image Description'/>
                </div>
                <div className='shape-container content-space-t-3 content-space-t-lg-4'>
                    <div className='container'>
                        <div className=''>
                            <span className='text-cap text-white'>Why Solys Labs</span>
                            <h1 className='display-1 text-white'>Real-time Blockchain data at your finger tips</h1>
                        </div>
                        <div className='row content-space-t-lg-4 content-space-b-2s'>
                            <div className='col-sm-6 col-md-4 mb-3 mb-sm-7'>
                                <div className='d-flex align-items-center mb-2'>
                                    <div className='flex-grow-1'>
                                        <h2 className='mb-0 text-white'>Blockchain Analytics for Crypto Investors</h2>
                                    </div>
                                </div>
                                <h5 className='text-secondary'>Get detailed market insight from millions of data points.</h5>
                            </div>
                            <div className='col-sm-6 col-md-4 mb-3 mb-sm-7'>
                                <div className='d-flex align-items-center mb-2'>
                                    <div className='flex-grow-1'>
                                        <h2 className='mb-0 text-white'>Business Intelligence for DApps & DAOs</h2>
                                    </div>
                                </div>
                                <h5 className='text-secondary'>Generate reports on Conversion, Retention, and Engagement.</h5>
                            </div>
                            <div className='col-sm-6 col-md-4 mb-3 mb-sm-7 mb-md-0'>
                                <div className='d-flex align-items-center mb-2'>
                                    <div className='flex-grow-1'>
                                        <h2 className='mb-0 text-white'>Custom Queries</h2>
                                    </div>
                                </div>
                                <h5 className='text-secondary'>AI based search engine to query any blockchain data.</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='shape-container content-space-t-3 content-space-t-lg-4 content-space-b-2'>
                    <div className='container'>
                        <h1 className='display-6 text-white'>Trusted by investors, communities & companies in crypto</h1>
                        
                        <div className="row">
                            <div className="col-6 col-sm-3 col-md-3 py-3">
                                <h5 className='text-secondary'>World of Women</h5>
                            </div>
                            <div className="col-6 col-sm-3 col-md-3 py-3">
                                <h5 className='text-secondary'>Nakamigos</h5>
                                {/* <img className="avatar avatar-lg avatar-4x3 avatar-centered" src={brand1} alt="Logo"/> */}
                            </div>
                            <div className="col-6 col-sm-3 col-md-3 py-3">
                                <h5 className='text-secondary'>Rexbits</h5>
                            </div>
                            <div className="col-6 col-sm-3 col-md-3 py-3">
                                <h5 className='text-secondary'>DenDekaDen</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className='bg-black'>
                    <div className='container content-space-t-2 content-space-b-1'>
                        <div className='row mb-9'>
                            <div className='col-lg-3 mb-5 mb-lg-0'>
                                <a href='index.html' aria-label='Solys Labs'>
                                    <img className='brand' src={assetsLogo} alt='Logo'/>
                                </a>
                            </div>
                            <div className='col-lg-3 mb-5 mb-md-0'>
                                <h5 className='text-white text-cap'>Help and advice</h5>
                                <ul className='list-unstyled list-py-1 mb-0'>
                                    <li><a className='link-sm link-light' href='mailto:support@solyslabs.co'>Contact us</a></li>
                                    <li><a className='link-sm link-light' href='#'>Terms of Use</a></li>
                                    <li><a className='link-sm link-light' href='#'>Privacy Policy</a></li>
                                </ul>
                            </div>
                            <div className='col-lg-3 mb-5 mb-md-0'>
                                <h5 className='text-white text-cap'>Company</h5>
                                <ul className='list-unstyled list-py-1 mb-0'>
                                    <li><a className='link-sm link-light' href='#'>About us</a></li>
                                    <li><a className='link-sm link-light' href='#'>Careers</a></li>
                                </ul>
                            </div>
                            <div className='col-lg-3'>
                                <p className='text-white-70 small mb-0'>© Solys Labs. 2023. All rights reserved.</p>
                                <a className='link-sm link-light' href="mailto:support@solyslabs.co">
                                    <p className='text-white-70 small mb-0'>support@solyslabs.co</p>
                                </a>
                                <div className='col-auto'>
                                    <ul className='list-inline mb-0'>
                                        <li className='list-inline-item'>
                                            <a className='btn btn-ghost-light btn-sm btn-icon' href="#" target="_blank">
                                                <i className='bi-twitter btn-ghost-light'></i>
                                            </a>
                                        </li>
                                        <li className='list-inline-item'>
                                            <a className='btn btn-ghost-light btn-sm btn-icon' href='#'>
                                                <i className='bi-linkedin btn-ghost-light'></i>
                                            </a>
                                        </li>
                                    </ul>
                                 </div>
                             </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

function LandingPage() {
    return (
        <>
            {<Body />}
        </>
    );
}

export default LandingPage;