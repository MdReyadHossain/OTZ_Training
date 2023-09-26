import React from 'react';
import {Divider, Modal, Paper, Stack, styled, Typography} from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import {Close} from '@mui/icons-material';

const PaperStyle = styled(Paper)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  bgcolor: background.paper;
  border: 1px solid #222;
  boxShadow: 24px;
`;


interface BasicWithHeaderModalProps {
    modalTitle: string,
    open: boolean,
    onClose: React.MouseEventHandler<HTMLButtonElement>,
    width: number,
    disableOutSideClick: boolean,
    children: React.ReactNode,
    header: boolean,
    headerBorder: boolean,
}

const BasicWithHeaderModal: React.FC<BasicWithHeaderModalProps> = ({
                                  modalTitle = '',
                                  open,
                                  onClose,
                                  width = 700,
                                  disableOutSideClick = false,
                                  children,
                                  header = true,
                                  headerBorder = true,
                                  ...rest
                              }) => {
    return (
        <React.Fragment>
            <Modal
                open={open}
                onClose={!disableOutSideClick ? onClose : () => false}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                {...rest}
            >
                <PaperStyle sx={{width: width, border: 0, boxShadow: 'none'}}>
                    {header && (
                        <Stack
                            direction={'row'}
                            justifyContent="space-between"
                            alignItems="center"
                            sx={{padding: '16px'}}
                        >
                            <Typography component={'span'} variant="h6" color="text.primary">
                                {modalTitle}
                            </Typography>
                            <IconButton onClick={onClose}>
                                {/* <img src={closeFilled} alt="" /> */}
                                <Close fontSize={'medium'} />
                            </IconButton>
                        </Stack>
                    )}

                    {headerBorder && <Divider />}

                    <Box>{children}</Box>
                </PaperStyle>
            </Modal>
        </React.Fragment>
    );
};

export default BasicWithHeaderModal;
