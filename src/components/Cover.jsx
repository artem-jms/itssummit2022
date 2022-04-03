import React, {useEffect, useState} from 'react';
import classNames from "classnames";
import module from "./modules/cover.module.css";

const Cover = ({children, position}) => {

    useEffect(() => {
        console.log(position)
        setActive(false)
        let timer = setTimeout(() => setActive(true), 300)

        return () => {
            clearTimeout(timer)
        }
    }, [])

    const [active, setActive] = useState(false)

    return (
        <div className={classNames(
            {[module.container__active]: active},
            {[module.container__left]: position === 'left'},
            {[module.container__right]: position === 'right'},
        )}>
            {children}
        </div>
    );
};

export default Cover;