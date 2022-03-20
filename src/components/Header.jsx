import React from 'react';
import module from './modules/header.module.css'

const Header = () => {

    //
    //

    return (
        <div className={module.header}>
            <h1 className={module.title}>ITS SUMMIT 2022</h1>
        </div>
    );
};

export default Header;