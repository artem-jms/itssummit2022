import React, {useEffect, Suspense} from 'react';
import './stylesheet/app.css'
import Header from "./components/small-components/Header";
import {Routes} from "./routes";
import {dynamicTitle, navBar, title} from "./config";
import classNames from "classnames";

const App = () => {

    useEffect(() => {
        if (!dynamicTitle) { document.title = title } else document.title = navBar[0]
    }, [])

    // 1. Что Зачем - About
    // 2. Видео - YouTube
    // 3. Кто там будет - Participants
    // 4. Партнеры - Partners
    // 5. Праздник 20 лет (Розыгрыш шар за вопросы спикерам) - Speakers
    // 6. Мы в соц-сетях - Networks

    const Scroll = (id) => {
        const yOffset = -100;
        const element = document.getElementById(id);
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        if (id !== 'About') {
            window.scrollTo({top: y, behavior: 'smooth'});
        } else window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return (
        <div className={'wrapper'}>
            <Header Scroll={Scroll}/>
            <Suspense fallback={<div>Loading</div>}>
                {Routes.map((route) => {
                    return <div
                        id={route.title}
                        className={classNames('content')}
                        key={route.title}>{route.component}</div>
                })}
            </Suspense>
        </div>
    );
};

export default App;