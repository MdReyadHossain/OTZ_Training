import React from "react";
import { Backdrop, CircularProgress } from "@mui/material";
import CoreButton from "./CoreButton";

interface LoadingButton {
    variant?: "contained" | "text" | "outlined" | undefined,
    size?: "large" | "small" | "medium" | undefined,
    isLoading: boolean,
    loadingText: string,
    disabled?: boolean,
    children?: React.ReactNode,
    startIcon?: string,
    sx?: React.CSSProperties,
    type?: 'submit',
}

const LoadingButton = ({
    variant = "contained",
    size = "large",
    isLoading = false,
    loadingText = "",
    disabled = false,
    children = "",
    startIcon,
    type,
    sx
}: LoadingButton) => {

    return (
        <>
            <CoreButton
                variant={variant}
                size={size}
                disabled={isLoading || disabled}
                startIcon={
                    isLoading && startIcon ? (
                        <CircularProgress size={16} color={"inherit"} />
                    ) : isLoading ? (
                        <CircularProgress size={16} color={"inherit"} />
                    ) : (
                        startIcon
                    )
                }
                type={type}
                sx={sx}
            >
                {isLoading && loadingText ? loadingText : children}
            </CoreButton>

            <Backdrop
                sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={isLoading}
                invisible={true}
            >
            </Backdrop>
        </>
    );
};

export default LoadingButton;
