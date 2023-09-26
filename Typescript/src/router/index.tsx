import { useRoutes } from "react-router-dom";
import AuthenticationRoutes from "./AuthenticationRoutes";
import MainRoutes from "./MainRoutes";

const ThemeRoutes = (): any => {
    return useRoutes([AuthenticationRoutes, MainRoutes]);
}

export default ThemeRoutes;
