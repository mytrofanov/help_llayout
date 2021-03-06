import * as React from 'react';
import {alpha, styled} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import s from '../styles/form.module.css'
import Button from '@mui/material/Button';

export const BootstrapInput = styled(InputBase)(({theme}) => ({
    'label + &': {
        marginTop: theme.spacing(2),
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
        border: '1px solid #ced4da',
        fontSize: 16,
        width: '100%',
        padding: '10px 12px',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main,
        },
    },
}));


export default function CustomizedInputs() {

    return (
        <div className={s.personalInfo}>
            <div className={s.leftBlock}>
                    <div>
                        <Box
                            component="div"
                            noValidate
                            sx={{
                                width: '90%',
                                display: 'grid',
                                gridTemplateColumns: {sm: '1fr 1fr'},
                                marginTop:2
                            }}
                        >
                            <FormControl
                                sx={{marginRight: 2, }}
                                variant="standard">
                                <InputLabel shrink htmlFor="????'??">
                                    ????'??
                                </InputLabel>
                                <BootstrapInput  defaultValue=" " id="name"/>
                            </FormControl>
                            <FormControl variant="standard">
                                <InputLabel shrink htmlFor="??????????????">
                                    ??????????????
                                </InputLabel>
                                <BootstrapInput defaultValue=" " id="surname"/>
                            </FormControl>
                        </Box>
                        <div>
                            <Box
                                component="div"
                                noValidate
                                sx={{
                                    width: '90%',
                                    display: 'grid',
                                    gridTemplateColumns: {sm: '3fr'},
                                    marginTop:2
                                }}
                            >
                                <FormControl
                                    fullWidth={true}
                                    variant="standard"

                                >
                                    <InputLabel shrink htmlFor="?????????? ????????????????, ??????????????????????">
                                        ?????????? ????????????????, ??????????????????????
                                    </InputLabel>
                                    <BootstrapInput fullWidth={true} defaultValue=" " id="companyName"/>
                                </FormControl>
                                <input
                                    type="file"
                                    accept="image/*"
                                    style={{ display: 'none' }}
                                    id="button-logo-choose"

                                />
                                <label htmlFor="button-logo-choose">
                                    <Button
                                        sx={{position: 'relative',
                                            top: '-110%',
                                            left:'100%',
                                            textTransform: 'none'
                                    }}
                                        component="span">
                                        + ??????????????
                                    </Button>
                                </label>
                                <FormControl
                                    sx={{
                                        marginTop:-2
                                    }}
                                    variant="standard">
                                    <InputLabel shrink htmlFor="Email-??????????">
                                        Email-??????????
                                    </InputLabel>
                                    <BootstrapInput defaultValue=" " id="email"/>
                                </FormControl>
                                <FormControl
                                    sx={{
                                        marginTop:2
                                    }}
                                    variant="standard">
                                    <InputLabel shrink htmlFor="?????????? ????????????????">
                                        ?????????? ????????????????
                                    </InputLabel>
                                    <BootstrapInput defaultValue=" " id="phone_number"/>
                                </FormControl>
                            </Box>
                        </div>
                    </div>

            </div>
            <div className={s.centredBlock}>

            </div>
            <div className={s.rightBlock}>
                    <div>
                         <div>
                            <Box
                                component="div"
                                noValidate
                                sx={{
                                    width: '90%',
                                    display: 'grid',
                                    gridTemplateColumns: {sm: '3fr'},
                                    marginTop:2
                                }}
                            >
                                <FormControl
                                    fullWidth={true}
                                    variant="standard"

                                >
                                    <InputLabel shrink htmlFor="????????????">
                                        ????????????
                                    </InputLabel>
                                    <BootstrapInput fullWidth={true} defaultValue=" " id="country"/>
                                </FormControl>
                                <Box
                                    component="div"
                                    noValidate
                                    sx={{
                                        width: '100%',
                                        display: 'grid',
                                        gridTemplateColumns: {sm: '1fr 1fr'},
                                        marginTop:2
                                    }}
                                >
                                    <FormControl
                                        sx={{marginRight: 2, }}
                                        variant="standard">
                                        <InputLabel shrink htmlFor="??????????">
                                            ??????????
                                        </InputLabel>
                                        <BootstrapInput  defaultValue=" " id="city"/>
                                    </FormControl>
                                    <FormControl variant="standard">
                                        <InputLabel shrink htmlFor="????????, ??????????">
                                            ????????, ??????????
                                        </InputLabel>
                                        <BootstrapInput defaultValue=" " id="state"/>
                                    </FormControl>
                                </Box>
                                <FormControl
                                    sx={{
                                        marginTop:2
                                    }}
                                    variant="standard">
                                    <InputLabel shrink htmlFor="????????????">
                                        ????????????
                                    </InputLabel>
                                    <BootstrapInput defaultValue=" " id="address"/>
                                </FormControl>
                                <FormControl
                                    sx={{
                                        marginTop:2
                                    }}
                                    variant="standard">
                                    <InputLabel shrink htmlFor="???????????????? ????????????">
                                        ???????????????? ????????????
                                    </InputLabel>
                                    <BootstrapInput defaultValue=" " id="post_index"/>
                                </FormControl>
                            </Box>
                        </div>
                    </div>
            </div>
        </div>
    );
}
