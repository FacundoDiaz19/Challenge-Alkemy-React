import Home from '../components/pages/Home';
import Login from '../components/pages/Login';
import SearchTeam from '../components/pages/SearchTeam';
import ViewHeroPage from '../components/pages/ViewHeroPage';


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
    },
    {
        path: "/ViewHero/:id",
        component: ViewHeroPage,
        exact: true,
    }
];

export default routes;