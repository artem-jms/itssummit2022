import React from 'react';
import module from './modules/youtube.module.css'
import Notes from "./small-components/Notes";

const YouTube = () => {

    return (
        <div className={module.content}>
            <div className={module.head}>
                <h1>YouTube</h1>
            </div>
            <Notes />
        </div>
    );
};

export default YouTube;