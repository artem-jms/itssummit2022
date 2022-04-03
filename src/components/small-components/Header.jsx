import React, {useState} from 'react';
import module from "../modules/header.module.css";
import classNames from "classnames";
import {dynamicTitle} from "../../config";
import {useNavBar} from "../../hooks/useNavBar";

const Header = ({Scroll}) => {

    let [selected, setSelected] = useState(useNavBar)

    const Select = (block) => {
        let massive = selected.map((sel) => {
            if (block.title === sel.title) {
                return {...sel, active: true}
            }
            return {...sel, active: false}
        })
        if (dynamicTitle) document.title = block.title
        setSelected(massive)
        console.log(block)
        Scroll(block.component)
    }

    return (
        <div className={classNames(module.header)}>
            <div className={module.header__child}>
                {selected.map((block) =>
                    <div
                        key={block.title}
                        onClick={() => {
                            if (!block.active) Select(block)
                        }}
                        className={classNames(module.block, {[module.block__active] : block.active})}>
                        {block.title}
                        <span className={classNames(
                            {[module.block__selected__active]: block.active},
                            module.block__selected,
                        )}/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;