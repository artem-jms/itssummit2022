import React from 'react';
import module from './modules/youtube.module.css'
import {YTLink} from '../config'

const YouTube = () => {
    return (
        <div className={module.yt}>

            <h2>Трансляція прямо тут!</h2>
            <div className={module.player}>
                <iframe
                    id="player" width="100%" height="100%"
                    src={YTLink}
                    frameBorder="0" />
            </div>
        </div>
    );
};

export default YouTube;