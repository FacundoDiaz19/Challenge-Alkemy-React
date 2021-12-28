import Home from '../components/pages/Home';
import Login from '../components/private/Login';


const routes = [
    {
        path: "/home",
        component: Home,
        exact: true,
    },
    {
        path: "/",
        component: Login,
        exact: true,
    }
];

export default routes;