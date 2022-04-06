import React from 'react';
import module from "./modules/partners.module.css";
import Notes from "./small-components/Notes";
import {partners} from "../config";

const Partners = () => {
    return (
        <div className={module.content}>
            <Notes limit={100} />
            <div className={module.header}>
                Партнери
            </div>
            <div className={module.cards}>
                {partners.map((value, index) => <div
                    key={index}
                    className={module.card}>
                        <img src={value.image} alt={''}/>
                        <div>{value.title}</div>
                </div>)}
            </div>
        </div>
    );
};

export default Partners;