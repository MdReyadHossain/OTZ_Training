import AuthenticationLayout from "../components/layout/AuthLayout/AuthenticationLayout";
import Login from "../components/auth/login";
import {Navigate} from "react-router-dom";

const AuthenticationRoutes = {
    path: '/',
    element:<AuthenticationLayout/>,
    children: [
        {
            path: '',
            element: <Navigate to="login" replace={true}/>
        },
        {
            path: 'login',
            element: <Login />
        },
    ]

}
export default AuthenticationRoutes;
