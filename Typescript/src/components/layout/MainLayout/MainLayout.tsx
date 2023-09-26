import { Box } from "@mui/material"
import { Outlet } from "react-router-dom"

const MainLayout = (): any => {

    return (
        <Box>
            <Outlet />
        </Box>
    )
}

export default MainLayout;