import Login from './screens/Login'
import Homepage from './screens/Homepage'
import Items from './screens/Items'

export const routes = [
    {
        path: "/",
        component: Login,
        key: 1
    },
    {
        path: "/home",
        component: Homepage,
        key: 2
    },
    {
        path: "/Items",
        component: Items,
        key: 3
    }
];

export const authRoutes = [
    {
        path: "/",
        component: Login,
        key: 1
    },
]