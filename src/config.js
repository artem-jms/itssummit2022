import {glavniy, koshoviy, kosogor, lisovsky, strijak} from "./components/import";

// Ссылка на запись (Только ютуб)
export const YTLink = 'https://www.youtube.com/embed/sAQxanVqFns'

// Названия элементов хеадера (5 Значений)
export const navBar = [
    '🚀 Summit 2021',
    'Дивитися',
    'Партнери',
    'Спікери',
]

// Задержка скорости скролла страниц в мс. (Стандартное значение 150)
export const scrollDelay = 150

// Когда True будет изменять название страницы в зависимости от названия элемента navBar
export const dynamicTitle = false

// Название страницы (если dynamicTitle = false)
export const title = 'ITS SUMMIT 2222'


// Основная страница

//Бумажки
export const notes = ['#саміт', '#summit', '#2022', '#ітс', '#its', '#ITS', '#ІТС', '#ітсхаб']
//Количество дубликатов бумажек
export const notes_duplicates = 1
//Цвета бумажек
export const notes_colors = ['#F8FA90', '#FFD166', '#E9D985', '#70EE9C', '#FF8552', '#F7CB15']
// Заголовок
export const title_about = 'ITS SUMM!T'
// Подзаголовок
export const subtitle_about = '2022'
// Фраза
export const phrase_about = 'Настав наш час писати майбутнє !'

// Заголовок карточки
export const title_card_about = 'Що ж це таке?'
// Описание карточки
// Абзац 1
export const description_card_about_1 = 'Саміт ІТС - унікальна можливість наживо поспілкуватися з усіма провідними очольниками нашого інституту.'
// Абзац 2
export const description_card_about_2 = 'Ми обговоримо низку питань де нащі спікери обговорять шляхи нашого розвитку у подальшому житті.'
// Кнопка
export const button_card_about = 'Дивитися!'

// YouTube

// Дата начала в формате месяц/день
export const date = '4/27'

export const date_1 = 'До розмови по-душам 🖐🏻'
export const date_description_1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
export const date_2 = 'Й можна буде подивитися 😱'
export const date_description_2 = 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
export const date_3 = 'І отримаєш шару 📙'
export const date_description_3 = 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
export const date_4 = 'TEDed? ITSed 😎'
export const date_description_4 = 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'

// Настройки спикеров

// name - Имя, role - Кем будет на самите
// description - Описание, color - цвет карточки
// image - Ссылка на картинку из папки ./img
// link - ссылка на телеграм (если не нужна оставить пустым)
//

export const Speaker = [
    {
        name: 'Kostyantin Lisovskiy',
        role: 'Спікер',
        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
        image: lisovsky,
        link: 'https://t.me/kost_lisov',
        color: '#FF8552',
        iKts: true,
        tk: false,
        sr: true,
    },
    {
        name: 'Anastasia Kosogor',
        role: 'Спікер',
        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
        image: kosogor,
        link: '',
        color: '#FFD166',
        iKts: false,
        tk: true,
        sr: true,
    },
    {
        name: 'Andriy Strijak',
        role: 'Представник Студради',
        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
        image: strijak,
        link: '',
        color: '#70EE9C',
        iKts: true,
        tk: false,
        sr: true,
    },
    {
        name: 'Koshoviy Evheniy',
        role: 'Авторитет',
        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
        image: koshoviy,
        link: '',
        color: '#72DDF7',
        iKts: true,
        tk: false,
        sr: true,
    },
    {
        name: 'Кононова Ірина',
        role: 'Викладач',
        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
        image: koshoviy,
        link: '',
        color: '#EF8354',
        iKts: true,
        tk: false,
        sr: false,
    },
    {
        name: 'Живков Олександр',
        role: 'Викладач',
        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
        image: koshoviy,
        link: '',
        color: '#FCB07E',
        iKts: false,
        tk: true,
        sr: false,
    },
    {
        name: 'Авдєєнко Гліб',
        role: 'Викладач',
        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
        image: koshoviy,
        link: '',
        color: '#FFA400',
        iKts: false,
        tk: true,
        sr: false,
    },
    {
        name: 'Правило Валерій',
        role: 'Викладач',
        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
        image: koshoviy,
        link: '',
        color: '#119DA4',
        iKts: true,
        tk: false,
        sr: false,
    },
    {
        name: 'Ільченко Михайло',
        role: 'Главний',
        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
        image: koshoviy,
        link: '',
        color: '#AD5D4E',
        iKts: false,
        tk: false,
        sr: false,
    },
    {
        name: 'Євген Баличев',
        role: 'Представник компанії Nokia',
        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
        image: koshoviy,
        link: '',
        color: '#94FBAB',
        iKts: false,
        tk: false,
        sr: false,
    },
]


// Партнери

export const partners = [
    {
        title: 'Nokia',
        image: glavniy,
    },
    {
        title: 'ITS',
        image: glavniy,
    },
]