import React from "react";
import { Backdrop, Modal, Paper, styled } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { Close } from "@mui/icons-material";
import Styles from "./Modal.module.css";

const PaperStyle = styled(Paper)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  bgcolor: background.paper;
  border: 1px solid #222;
  boxShadow: 24px;
`;

interface InfoModalProps {
    open: boolean,
    onClose: React.MouseEventHandler<HTMLButtonElement>,
    width: number,
    width1366: number,
    disableOutSideClick: boolean,
    children: React.ReactNode,
}

const InfoModal: React.FC<InfoModalProps> = ({
                       open = false,
                       onClose,
                       width = 700,
                       width1366 = 525,
                       disableOutSideClick = false,
                       children,
                       ...rest
                   }) => {
    return (
        <React.Fragment>
            <Modal
                open={open}
                onClose={!disableOutSideClick ? onClose : () => false}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
                className={Styles.congratulations_modal_box}
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
                {...rest}
            >
                <PaperStyle
                    sx={{
                        width: width,
                        border: 0,
                        boxShadow: "none",
                        "@media screen and (max-width: 1366px)": {
                            width: width1366,
                        },
                    }}
                >
                    <IconButton className={Styles.modalCloseIcon} onClick={onClose}>
                        <Close fontSize={"medium"} />
                    </IconButton>

                    <Box className={Styles.congratulations_modal_box}>{children}</Box>
                </PaperStyle>
            </Modal>
        </React.Fragment>
    );
};

export default InfoModal;
