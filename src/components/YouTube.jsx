import React, {useEffect, useState} from 'react';
import module from './modules/youtube.module.css'
import {
    date,
    date_1,
    date_2,
    date_3,
    date_4,
    date_description_1,
    date_description_2, date_description_3,
    date_description_4, YTLink
} from "../config";

const YouTube = () => {

    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        let difference = +new Date(`${date}/${year}`) - +new Date();
        let timeLeft;
        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        } else {
            timeLeft = {
                days: '0',
                hours: '0',
                minutes: '0',
                seconds: '0',
            }
        }
        return timeLeft
    }

    useEffect(() => {
        setTimeout(() => {
            setCounter(calculateTimeLeft());
        }, 1000);
    });

    const [counter, setCounter] = useState(calculateTimeLeft())
    const colors = ['#70EE9C', '#E9D985', '#7161EF','#F78E69']

    return (
        <div className={module.content}>
            <div className={module.timer}>
                <div className={module.timer__content}>
                    <div className={module.cards}>
                        <div className={module.time}>{counter.days} Днів</div>
                        <div
                            style={{backgroundColor: colors[0]}} className={module.time_card}>
                            <div>{date_1}</div>
                            <span>{date_description_1}</span>
                        </div>
                    </div>
                    <div className={module.cards}>
                        <div className={module.time}>{counter.hours} Годин</div>
                        <div
                            style={{backgroundColor: colors[1]}} className={module.time_card}>
                            <div>{date_2}</div>
                            <span>{date_description_2}</span>
                        </div>
                    </div>
                    <div className={module.cards}>
                        <div className={module.time}>{counter.minutes} Хвилин</div>
                        <div
                            style={{backgroundColor: colors[2]}} className={module.time_card}>
                            <div>{date_3}</div>
                            <span>{date_description_3}</span>
                        </div>
                    </div>
                    <div className={module.cards}>
                        <div className={module.time}>{counter.seconds} Секунд</div>
                        <div
                            style={{backgroundColor: colors[3]}} className={module.time_card}>
                            <div>{date_4}</div>
                            <span>{date_description_4}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={module.youtube}>
                <div className={module.youtube_player}>
                    <iframe id={'YouTubePlayer'} width="100%" height="100%"
                            src={YTLink} title={'Player'}
                            frameBorder="0">
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default YouTube;