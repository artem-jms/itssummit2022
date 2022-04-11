import React, {useState} from 'react';
import module from "../modules/header.module.css";
import classNames from "classnames";
import {dynamicTitle} from "../../config";
import {useNavBar} from "../../hooks/useNavBar";

const Header = ({Scroll}) => {

    let [selected, setSelected] = useState(useNavBar)

    const Select = (block) => {
        setSelected(selected)
        if (dynamicTitle) document.title = block.title
        if (block.component === 'YouTube') {
            Scroll('YouTubePlayer')
        } else {
            Scroll(block.component)
        }
    }

    return (
        <div className={classNames(module.header)}>
            <div className={module.header__child}>
                {selected.map((block) =>
                    <div
                        key={block.title}
                        onClick={() => {
                            Select(block)
                        }}
                        className={classNames(module.block)}>
                        {block.title}
                        <span className={classNames(module.block__selected)}/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;