import React, {useEffect, useState} from 'react';
import module from "../modules/about.module.css";
import {notes, notes_colors, notes_duplicates} from "../../config";

const Notes = () => {

    useEffect(() => {
        let massive = []

        for (let j = 0; j < notes_duplicates; j++) {
            for (let i = 0; i < notes.length; i++) {
                let rotate = Math.random() * (30 - -30) + -30
                let x =  Math.random() * window.innerWidth - 150
                let y = Math.random() * 200
                let opacity = Math.random() * (0.4 - 0.2) + 0.5
                let color = notes_colors[Math.floor(Math.random() * notes_colors.length)]
                massive.push({
                    title: notes[i],
                    positionX: x,
                    positionY: y,
                    rotateZ: rotate,
                    opacity: opacity,
                    color: color,
                })
            }
        }

        setItems(massive)
    }, [])


    const [items, setItems] = useState([])

    return (
        <div className={module.floating}>
            {items.map((item, index) =>
                <div
                    key={index}
                    style={{transform: `translateX(${item.positionX}px) translateY(${item.positionY}px) rotateZ(${item.rotateZ}deg)`,
                        opacity: item.opacity, backgroundColor: item.color
                    }}>
                    {item.title}
                </div>)}
        </div>
    );
};

export default Notes;