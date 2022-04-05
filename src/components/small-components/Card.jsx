import React from 'react';
import md from '../modules/card.module.css'

const Card = ({image, description, link, role, name, color, setModal, sr, tk, iKts}) => {
    return (
        <div className={md.card}>
            <div className={md.card__header}>
                <img src={image} alt={''}/>
            </div>
            <div style={{backgroundColor: color}} className={md.card__content}>
                <div className={md.card__info}>
                    <div className={md.card__title}>{name}</div>
                    <div className={md.card__subtitle}>{role}</div>
                </div>
                <div onClick={() => setModal({active: true, value: {
                        image: image,
                        description: description,
                        link: link,
                        name: name,
                        role: role,
                        color: color,
                        sr: sr,
                        tk: tk,
                        iKts: iKts,
                    }})}
                     style={{backgroundColor: color}}
                     className={md.card__button}>?</div>
            </div>
        </div>
    );
};

export default Card;