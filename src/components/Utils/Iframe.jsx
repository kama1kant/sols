import React, { useEffect } from 'react';
// import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '../../assets/css/theme.css';
import '../../assets/css/style.css';
import classNames from 'classnames';

export default function Iframe(props) {
    return (
        <>
            <div className='mb-3'>
                <span className={classNames({'d-none': props.frame == 'single'})}>{props.title || 'NFT chart'}</span>
            </div>    
            <div className='iframe-container'>
                <iframe
                    className={classNames('w-100', { 'crop-iframe': !props.frame, 'crop-iframe-single': props.frame == 'single'})}
                    height={props.height || '500'}
                    src={props.src}
                    title={props.title || 'NFT chart'}>
                </iframe>
            </div>
        </>
    );
}
// "https://dune.com/embeds/2285796/3748344"