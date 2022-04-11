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
import classNames from "classnames";

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

    const [contentCards, setContentCards] = useState([
        {
            date: date_1,
            date_description: date_description_1,
            color: colors[0],
            time: counter.days,
            bg: module.time__green,
            active: false,
        },
        {
            date: date_2,
            date_description: date_description_2,
            color: colors[1],
            time: counter.hours,
            bg: module.time,
            active: false,
        },
        {
            date: date_3,
            date_description: date_description_3,
            color: colors[2],
            time: counter.minutes,
            bg: module.time__blue,
            active: false,
        },
        {
            date: date_4,
            date_description: date_description_4,
            color: colors[3],
            time: counter.seconds,
            bg: module.time__red,
            active: false,
        },
    ])

    const SetCard = (card) => {
        setContentCards(contentCards.map(current => {
            if (current === card) return {...current, active: true}
            return {...current, active: false}
        }))
    }

    return (
        <div className={module.content}>
            <div className={module.timer}>
                <div className={module.timer__content}>
                    {contentCards.map((card, index) => <div key={index} className={module.cards}>
                        <div className={classNames(module.time, card.bg)}>{card.time} Днів</div>
                        <div
                            onClick={() => SetCard(card)}
                            style={{backgroundColor: card.color}}
                            className={classNames(module.time_card, {[module.time_card__active]: card.active})}>
                            <div>{card.date}</div>
                            <span>{card.date_description}</span>
                        </div>
                    </div>)}
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