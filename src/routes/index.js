import About from "../components/About";
import YouTube from "../components/YouTube";
import Contacts from "../components/Contacts";
import Partners from "../components/Partners";
import Celebration from "../components/Celebration";

export const Routes = [
    {
        title: 'About',
        component: <About />,
    },
    {
        title: 'YouTube',
        component: <YouTube />,
    },
    {
        title: 'Partner',
        component: <Partners />,
    },
    {
        title: 'Celebration',
        component: <Celebration />,
    },
    {
        title: 'Contacts',
        component: <Contacts />,
    },
]