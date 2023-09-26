import React from 'react';
import {Box} from "@mui/material";
import {Outlet} from "react-router-dom";

const AuthenticationLayout = () : any => {
    return(
        <Box>
            <Outlet/>
        </Box>
    )
}
export default AuthenticationLayout;
