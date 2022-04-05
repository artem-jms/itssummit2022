import React, {useEffect, useState} from 'react';
import module from "./modules/celebration.module.css";
import Notes from "./small-components/Notes";
import Card from "./small-components/Card";
import {Speaker} from "../config";
import Modal from "./small-components/Modal";

const Speakers = () => {

    useEffect(() => {
        setSpeakers(Speaker)
    }, [])

    const [speakers, setSpeakers] = useState([])
    const [modal, setModal] = useState({active: false, value: {image: null}})

    return (
        <div className={module.content}>
            <Modal setModal={setModal} modal={modal}/>
            <div className={module.header}>
                <div>Учасники</div>
            </div>
            <Notes limit={20}/>
            <div className={module.cards}>
                {speakers.map(speaker => <Card
                    setModal={setModal}
                    key={speaker.name}
                    name={speaker.name}
                    image={speaker.image}
                    role={speaker.role}
                    link={speaker.link}
                    color={speaker.color}
                    description={speaker.description}
                    iKts={speaker.iKts}
                    tk={speaker.tk}
                    sr={speaker.sr}
                />)}
            </div>
        </div>
    );
};

export default Speakers;