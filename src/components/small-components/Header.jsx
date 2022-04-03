import React, {useState} from 'react';
import module from "../modules/header.module.css";
import classNames from "classnames";
import {dynamicTitle, scrollDelay} from "../../config";
import {useNavBar} from "../../hooks/useNavBar";

const Header = ({setCurrent, setPosition}) => {

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
        setCurrent(block.component)
    }

    const Next = (up) => {
        setTimeout(() => {
            let next = {}
            for (let i = 0; i < selected.length; i++) {
                if (selected[i].active) {
                    if (up) {
                        if (window.innerWidth < 550) {
                            setPosition('left')
                        } else {
                            setPosition('right')
                        }
                        if (i === selected.length - 1) {
                            next = selected[0];
                        } else {
                            next = selected[i + 1];
                        }
                    } else {
                        if (window.innerWidth < 550) {
                            setPosition('left')
                        } else {
                            setPosition('left')
                        }
                        if (i === 0) {
                            next = selected[selected.length - 1];
                        } else {
                            next = selected[i - 1]
                        }
                    }
                }
            }
            Select(next)
        }, scrollDelay)
    }

    const Wheel = (e) => {
        Next(e.deltaY < 0)
    }

    return (
        <div className={module.header}>
            <div onWheel={Wheel} className={module.scroll}/>
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