import MainLayout from "../components/layout/MainLayout/MainLayout";
import Dashboard from "../components/user/Dashboard";
import RoutLink from "../helpers/constants/routeLinks";

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: RoutLink.dashboard.path,
            element: <Dashboard />,
        }
    ]
}

export default MainRoutes;