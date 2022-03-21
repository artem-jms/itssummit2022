import React, {useEffect, useState} from 'react';
import './stylesheet/app.css'
import Header from "./components/small-components/Header";
import {Routes} from "./routes";
import {dynamicTitle, navBar, title} from "./config";

const App = () => {

    useEffect(() => {
        if (!dynamicTitle) { document.title = title } else document.title = navBar[0]
    }, [])

    //1. Что Зачем - About
    // 2. Видео - YouTube
    // 3. Кто там будет - Participants
    // 4. Партнеры - Partners
    // 5. Праздник 20 лет (Розыгрыш шар за вопросы спикерам) - Celebration
    // 6. Мы в соц-сетях - Networks
    const [Current, setCurrent] = useState(Routes[0].title)

    return (
        <div className={'wrapper'}>
            <Header setCurrent={setCurrent}/>
            {Routes.map((route) => { if (route.title === Current) return <div key={route.title}>{route.component}</div> })}
        </div>
    );
};

export default App;