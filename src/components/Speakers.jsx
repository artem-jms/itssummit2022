import React from 'react';
import module from "./modules/celebration.module.css";
import Notes from "./small-components/Notes";

const Speakers = () => {
    return (
        <div className={module.content}>

            <div className={module.header}>
                <div>Спікери</div>
            </div>
            <Notes limit={20}/>
        </div>
    );
};

export default Speakers;