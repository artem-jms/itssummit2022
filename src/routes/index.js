import About from "../components/About";
import YouTube from "../components/YouTube";
import Partners from "../components/Partners";
import Speakers from "../components/Speakers";

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
        title: 'Speakers',
        component: <Speakers />,
    },
    {
        title: 'Partner',
        component: <Partners />,
    },
]