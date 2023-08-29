import React, { useEffect } from 'react';
// import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '../../assets/css/theme.css';
import '../../assets/css/style.css';
import logo from '../../assets/svg/logos/deeprecord-logo-text-white.svg';


export default function Footer() {
    return (
        <footer className="border-top bg-black">
            <div className='container content-space-1'>
                <div className="row align-items-md-center text-center text-sm-start">
                    <div className="col-md-auto mb-3 mb-md-0">
                        <a href="index.html" aria-label="Front">
                            <img className="brand" src={logo} alt="Logo" />
                        </a>
                    </div>

                    <div className="col-sm mb-3 mb-sm-0 text-center">
                        <ul className="list-inline list-separator mb-0">
                            <li className="list-inline-item"><a className="link-sm link-secondary" href="#">Contact us</a></li>
                            <li className="list-inline-item"><a className="link-sm link-secondary" href="#">Terms of Use</a></li>
                            <li className="list-inline-item"><a className="link-sm link-secondary" href="#">About us</a></li>
                        </ul>
                    </div>

                    <div className="col-sm-auto">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                                <a className="btn btn-soft-secondary btn-xs btn-icon rounded-circle" href="https://discord.gg/RH8AJGtzF3" target="_blank">
                                    <i className="bi-discord btn-ghost-light"></i>
                                </a>
                            </li>

                            <li className="list-inline-item">
                                <a className="btn btn-soft-secondary btn-xs btn-icon rounded-circle" href="https://twitter.com/DeepRecord_io" target="_blank">
                                    <i className="bi-twitter btn-ghost-light"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}