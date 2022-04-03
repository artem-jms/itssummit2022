import React from 'react';
import module from "./modules/partners.module.css";
import Notes from "./small-components/Notes";

const Partners = () => {
    return (
        <div className={module.content}>
            <div className={module.head}>
                <h1>Партнери</h1>
            </div>
            <Notes />
        </div>
    );
};

export default Partners;