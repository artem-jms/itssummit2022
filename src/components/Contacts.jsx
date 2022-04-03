import React from 'react';
import module from "./modules/contacts.module.css";
import Notes from "./small-components/Notes";

const Contacts = () => {
    return (
        <div className={module.content}>
            <div className={module.head}>
                <h1>Contacts</h1>
            </div>
            <Notes />
        </div>
    );
};

export default Contacts;