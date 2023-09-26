import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const CoreButton = styled(Button)(() => ({
    boxShadow: "none",
    minWidth: "unset",
    "&.MuiButton-root:hover": {
        boxShadow: "none",
    },
    "&.MuiButton-sizeSmall": {
        fontSize: "13px",
        lineHeight: "22px",
        padding: "4px 10px",
    },
    "&.MuiButton-sizeMedium": {
        fontSize: "14px",
        lineHeight: "24px",
        padding: "6px 16px",
    },
    "&.MuiButton-sizeLarge": {
        padding: "8px 24px",
    },
    "&.MuiButton-sizeSmall .MuiSvgIcon-root": {
        fontSize: "18px",
    },
    "&.MuiButton-sizeMedium .MuiSvgIcon-root": {
        fontSize: "20px",
    },
    "&.MuiButton-sizeLarge .MuiSvgIcon-root": {
        fontSize: "24px",
    },
}));

export default CoreButton;
