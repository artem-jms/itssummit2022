import React from 'react';
import module from './modules/about.module.css'
import classNames from "classnames";

const About = () => {

    return (
        <div className={classNames(module.content)}>
            <div className={module.header}>
                <h1>ITS SUMMIT 2022</h1>
            </div>
        </div>
    );
};

export default About;