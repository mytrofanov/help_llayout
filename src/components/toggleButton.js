import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {styled} from "@mui/material";


export default function PersonToggleButton() {
    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    const NewToggleButton = styled(ToggleButton)(({ selectedColor }) => ({
        "&.Mui-selected, &.Mui-selected:hover": {
            color: "white",
            backgroundColor: selectedColor
        }
    }));

    return (
        <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            sx={{ml:'40%'}}
        >
            <NewToggleButton selectedColor="#363b5d" value="Фіз.особа">Фіз.особа</NewToggleButton>
            <NewToggleButton selectedColor="#363b5d" value="Юр.особа">Юр.особа</NewToggleButton>
        </ToggleButtonGroup>
    );
}
