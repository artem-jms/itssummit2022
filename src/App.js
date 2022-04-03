import React, {useEffect, useState, Suspense} from 'react';
import './stylesheet/app.css'
import Header from "./components/small-components/Header";
import {Routes} from "./routes";
import {dynamicTitle, navBar, title} from "./config";
import classNames from "classnames";
import Cover from "./components/Cover";

const App = () => {

    useEffect(() => {
        if (!dynamicTitle) { document.title = title } else document.title = navBar[0]
    }, [])

    // 1. Что Зачем - About
    // 2. Видео - YouTube
    // 3. Кто там будет - Participants
    // 4. Партнеры - Partners
    // 5. Праздник 20 лет (Розыгрыш шар за вопросы спикерам) - Celebration
    // 6. Мы в соц-сетях - Networks
    const [Current, setCurrent] = useState(Routes[0].title)
    const [position, setPosition] = useState('left')

    return (
        <div className={'wrapper'}>
            <Header setPosition={setPosition} setCurrent={setCurrent}/>
            <Suspense fallback={<div>12345</div>}>
                {Routes.map((route) => {
                    if (route.title === Current) return <div
                        className={classNames('content')}
                        key={route.title}><Cover position={position}>{route.component}</Cover></div>
                    return <div key={route.title} />
                })}
            </Suspense>
        </div>
    );
};

export default App;