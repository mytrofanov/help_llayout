import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from "@mui/material/InputLabel";

export default function CreditCardForm() {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '80px' },
            }}
            noValidate
            autoComplete="off"
        >
            <InputLabel shrink htmlFor="Номер картки">
                Номер картки
            </InputLabel>
            <TextField id="outlined-basic"   variant="outlined" />
            <TextField id="outlined-basic"   variant="outlined" />
            <TextField id="outlined-basic"   variant="outlined" />
            <TextField id="outlined-basic"   variant="outlined" />

        </Box>
    );
}
