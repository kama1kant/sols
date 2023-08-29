import React, { useState } from 'react';
// import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '../../../assets/css/theme.css';
import '../../../assets/css/style.css';
import classNames from 'classnames';
import mixpanel from 'mixpanel-browser';
mixpanel.init('6e24a2975c4cfdb9a17b4232e9e459af', { debug: true }); 


export default function TimeTab(props) {
    const NftTimes = ['1 hr', '24 hr', '30 day'];
    const NftMintTimes = ['1 hr', '24 hr'];
    const timeIcon = ['bi-hourglass-bottom', 'bi-clock', 'bi-calendar-check'];
    const [currentTime, setCurrentTime] = useState(1);

    const timeUpdate = (time) => {
        setCurrentTime(time);
        props.updateCurrentTime(time);
    }

    const times = props.component == 2 ? NftMintTimes : NftTimes;
    let dom = [];
    times.map((time, i) => {
        dom.push(
            <li className="nav-item">
                <a 
                    className={classNames("nav-link", { "active": currentTime == i })} 
                    href="#" 
                    onClick={() => {
                        timeUpdate(i);
                        mixpanel.track('TimeTab', { 'Time': time });
                    }}
                >
                    <i className={`${timeIcon[i]} nav-icon`}></i> {time}
                </a>
            </li>
        )
    });

    return (
        <div className='col-sm-12 col-md-12 mb-3 mb-sm-7'>
            <ul className="nav nav-segment">
                {dom}
            </ul>
        </div>
    );
}