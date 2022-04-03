import React from 'react';
import module from './modules/about.module.css'
import classNames from "classnames";
import {
    subtitle_about,
    title_about,
    phrase_about,
    title_card_about,
    description_card_about_1,
    description_card_about_2, button_card_about,
} from "../config";
import Notes from "./small-components/Notes";

const About = () => {

    return (
        <div className={classNames(module.content)}>
            <Notes />
            <div className={module.title}>
                <div>
                    <div className={module.title__head}>{title_about}</div>
                    <div className={module.title__subtitle}>{subtitle_about}</div>
                    <div className={module.title__phrase}>
                        {phrase_about}
                    </div>
                </div>
            </div>
            <div className={module.card}>
                <div className={module.card__content}>
                    <div className={module.card__content__insight}>
                        <div className={module.card__title}>{title_card_about}</div>
                        <div className={module.card__subtitle}>
                            {description_card_about_1}<p />
                            {description_card_about_2}<p />
                            <div className={module.card__button}>
                                <div className={module.card__button__content}>
                                    {button_card_about}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;