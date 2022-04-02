import React from 'react';
import md from '../modules/partners.module.css'
import Image from "./Image";

const Card = ({image, description, link}) => {
    return (
        <div className={md.card}>
            <div className={md.card__header}>
                <Image src={image}/>
            </div>
        </div>
    );
};

export default Card;