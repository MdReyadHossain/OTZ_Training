import {Box, Drawer, Stack, Typography} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Clear} from "@mui/icons-material";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import React from "react";

interface FullPageDrawerProps {
    anchor: "top" | "left" | "right" | "bottom" | undefined,
    open: boolean,
    toggleDrawer: React.MouseEventHandler<HTMLButtonElement>,
    title: string,
    width: string,
    height: string,
    children: React.ReactNode
}
const FullPageDrawer: React.FC<FullPageDrawerProps> = ({anchor = "top", open, toggleDrawer, title, width = "98%", height = "96vh", children}) => {
    return (
        <Drawer
            anchor={anchor}
            open={open}
            onClose={toggleDrawer}
            sx={{
                "& .MuiPaper-root": {
                    width: width,
                    height: height,
                    margin: "8px auto",
                    borderRadius: "4px",
                },
            }}
        >
            <Box>
                <Stack direction='row' justifyContent='space-between' alignItems='center' spacing={2} px={3} py={2}>
                    <IconButton onClick={toggleDrawer}>
                        <ArrowBackIcon color={"action"}/>
                    </IconButton>
                    <Typography variant={"h6"}>{title || ""}</Typography>
                    <IconButton onClick={toggleDrawer}>
                        <Clear color={"action"}/>
                    </IconButton>
                </Stack>

                <Divider/>

                {children}

            </Box>
        </Drawer>
    );
};

export default FullPageDrawer;
