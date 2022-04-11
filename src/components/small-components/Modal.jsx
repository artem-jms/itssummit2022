import React from 'react';
import md from '../modules/modal.module.css'
import classNames from "classnames";
import {ikts, sr, telegram, tk} from "../import";

const Modal = ({setModal, modal}) => {

    const Close = () => {
        setTimeout(() => setModal({...modal, active: false}), 0)
    }

    return (
        <div onClick={Close} className={classNames(md.modal, {[md.modal__active]: modal.active})}>
            <div onClick={(e) => e.stopPropagation()} className={classNames(md.content, {[md.content__active]: modal.active})}>
                <div style={{backgroundColor: modal.value.color}} onClick={Close} className={md.close} />
                <img src={modal.value.image} alt={''}/>
                <div className={md.content__all}>
                    <div className={md.header}>
                        <div>{modal.value.name}</div>
                        <div className={md.subtitle}>{modal.value.role}</div>
                    </div>
                    <div className={md.content__info}>
                        {modal.value.description}
                    </div>
                    <div className={md.footer}>
                        <div className={classNames(md.footer__content, {[md.has__content]:
                                ((modal.value.sr === false) && !modal.value.iKts && !modal.value.tk)})}>
                            {modal.value.link !== '' &&
                                <div onClick={() => window.open(modal.value.link)}
                                     style={{cursor: 'pointer', borderRadius: '50%'}}>
                                    <img className={md.telegram} src={telegram} alt={''}/>
                                </div>}
                            {modal.value.sr === true && <img className={md.cathedra} src={sr}
                                                                  alt={''}/>}
                            {modal.value.iKts && <img className={md.cathedra} src={ikts}
                                                    alt={''}/>}
                            {modal.value.tk && <img className={md.cathedra} src={tk}
                                                    alt={''}/>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;