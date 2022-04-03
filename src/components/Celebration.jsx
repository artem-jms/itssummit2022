import React from 'react';
import module from "./modules/celebration.module.css";
import Notes from "./small-components/Notes";

const Celebration = () => {
    return (
        <div className={module.content}>
            <div className={module.head}>
                <h1>Партнери + Спікери</h1>
            </div>
            <Notes />
        </div>
    );
};

export default Celebration;