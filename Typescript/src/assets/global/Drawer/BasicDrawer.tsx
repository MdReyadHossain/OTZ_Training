import React from "react";
import { Box, Drawer, Stack, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Clear } from "@mui/icons-material";
import Divider from "@mui/material/Divider";

interface BasicDrawerProps {
    open: boolean,
    toggleDrawer: React.MouseEventHandler<HTMLButtonElement>,
    title: string,
    width: number,
    children: React.ReactNode
}

const BasicDrawer: React.FC<BasicDrawerProps> = ({ open, toggleDrawer, title = "", width = 450, children }) => {
    return (
        <Drawer
            anchor={"right"}
            open={open}
            onClose={toggleDrawer}
            sx={{
                "& .MuiPaper-root": {
                    maxWidth: width,
                    width: "100%",
                },
            }}
        >
            <Box sx={{ height: "100%" }}>
                <Stack direction='row' justifyContent='space-between' alignItems='center' spacing={2} p={3}>
                    <Typography variant={"h6"}>{title}</Typography>
                    <IconButton onClick={toggleDrawer}>
                        <Clear />
                    </IconButton>
                </Stack>

                <Divider />

                {children}
            </Box>
        </Drawer>
    );
};

export default BasicDrawer;
