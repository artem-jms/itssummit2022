import {navBar} from "../config";
import {Routes} from "../routes";

export const useNavBar = () => {
    let massive = []
    for (let i = 0; i < navBar.length; i++) {
        try {
            let active = false
            if (i === 0) active = true
            massive.push({
                title: navBar[i],
                component: Routes[i].title,
                active: active})
        } catch (e) {
            console.error('TOO MUCH OR TOO MANY NAV ELEMENTS')
        }
    }
    return massive
}