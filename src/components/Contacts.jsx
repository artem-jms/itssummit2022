import React from 'react';
import module from "./modules/contacts.module.css";

const Contacts = () => {
    return (
        <div className={module.container}>
            <div className={module.head}>
                <h1>Contacts</h1>
            </div>
        </div>
    );
};

export default Contacts;