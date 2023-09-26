import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { WarningAmber } from "@mui/icons-material";

interface WarningModalContentProps {
    title: string,
    subTitle: string,
    description: string,
    buttonName: string,
    onConfirm: React.MouseEventHandler<HTMLButtonElement>,
    onClose: React.MouseEventHandler<HTMLButtonElement>
}
const WarningModalContent: React.FC<WarningModalContentProps> = ({
                                 title = "Warning",
                                 subTitle = "",
                                 description,
                                 buttonName = "Delete",
                                 onConfirm,
                                 onClose,
                             }) => {
    return (
        <Box>
            <WarningAmber sx={{ fontSize: "72px" }} color={"warning"} />
            <Typography variant={"h4"} color={"text.primary"} sx={{ pt: 1 }}>
                {title}
            </Typography>
            <Typography variant={"h6"} color={"text.primary"} sx={{ pt: 1, pb: 2 }}>
                {subTitle}
            </Typography>
            <Typography variant={"body2"} color={"text.secondary"}>
                {description}
            </Typography>
            <Stack direction={"row"} alignItems={"center"} justifyContent={"flex-end"} spacing={2} sx={{ mt: 3 }}>
                <Button size='medium' variant='text' onClick={onClose}>
                    Cancel
                </Button>
                <Button size='medium' variant='contained' color='primary' onClick={onConfirm}>
                    {buttonName}
                </Button>
            </Stack>
        </Box>
    );
};

export default WarningModalContent;
