import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import AccountView from '../pages/AccountView';
interface RouteType {
    path : string,
    component : () => JSX.Element,
    name : string,
    protected: boolean
}

const routes : RouteType[] = [
    {
        path: "",
        component : Home,
        name : "Home Screen",
        protected:false
    },
    {
        path : "/dashboard",
        component : Dashboard,
        name : "Dashboard",
        protected:true
    },
    {
        path : "/accountview",
        component : AccountView,
        name : "Account View",
        protected:false
    }
];

export default routes