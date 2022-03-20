import React from 'react';
import './stylesheet/App.css'
import Header from "./components/Header";
import YouTube from "./components/YouTube";

const App = () => {

    //1. Что Зачем - Header
    // 2. Видео - YouTube
    // 3. Кто там будет - Participants
    // 4. Партнеры - Partners
    // 5. Праздник 20 лет (Розыгрыш шар за вопросы спикерам) - Celebration
    // 6. Мы в соц-сетях - Networks

    return (
        <div className={'wrapper'}>
            <Header />

            <YouTube />


        </div>
    );
};

export default App;