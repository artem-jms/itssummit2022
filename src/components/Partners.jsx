import React from 'react';
import module from './modules/partners.module.css'
import Card from "./small-components/Card";
import {lisovsky} from "./import";

const Partners = () => {
    return (
        <div className={module.content}>
            <div className={module.speakers}>
                <Card image={lisovsky}/>
            </div>
            <div className={module.partners}>
                <Card />
            </div>

        </div>
    );
};

export default Partners;