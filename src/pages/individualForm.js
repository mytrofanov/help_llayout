import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import CloseIcon from '@mui/icons-material/Close';
import {createTheme, ThemeProvider} from "@mui/material";
import s from '../styles/individualForm.module.css'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const theme = createTheme({
    components: {
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    backgroundColor: "rgba(0,0,0,0)",
                },
            },
        },
    },

})
export default function AlertDialogSlide() {
    const [openDialogSlide, setOpenDialogSlide] = React.useState(false);

    const handleClickOpen = () => {
        setOpenDialogSlide(true);
    };

    const handleClose = () => {
        setOpenDialogSlide(false);
    };

    return (
        <div>
            {openDialogSlide ? null :
                <Button variant="contained" onClick={handleClickOpen}>
                    Slide in alert dialog
                </Button>
            }

            <ThemeProvider theme={theme}>
                <Dialog
                    open={openDialogSlide}
                    TransitionComponent={Transition}
                    keepMounted
                    fullWidth
                    maxWidth={"93,31756%"}
                    onClose={handleClose}
                    PaperProps={{
                        style: {
                            backgroundColor: 'transparent',
                            boxShadow: 'none',
                            width: '93,31756%',
                        },
                    }}
                >
                    <CloseIcon onClick={handleClose} fontSize={"large"} sx={{
                        color: '#576b8f',
                        ml: '98%'
                    }}/>
                    <section className={s.personalData}>
                        Hello! This is new text sldfjldsf lsdfj sldksfj sdfflkj
                    </section>
                </Dialog>
            </ThemeProvider>
        </div>
    );
}
