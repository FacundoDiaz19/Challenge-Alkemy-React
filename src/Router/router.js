import Home from '../components/pages/Home';
import Login from '../components/pages/Login';
import SearchTeam from '../components/pages/SearchTeam';


const routes = [
    {
        path: "/",
        component: Home,
        exact: true,
    },
    {
        path: "/login",
        component: Login,
        exact: true,
    },
    {
        path: "/MakeTeam",
        component: SearchTeam,
        exact: true,
    }
];

export default routes;