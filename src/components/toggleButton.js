import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {styled} from "@mui/material";
import {useEffect} from "react";


export default function PersonToggleButton({setPersonalData}) {
    const [companyOrPerson, setCompanyOrPerson] = React.useState('person');

    useEffect(() => {
        if (companyOrPerson === 'company') {
            setPersonalData(false)
        }
        if (companyOrPerson === 'person') {
            setPersonalData(true)
        }
    }, [companyOrPerson])


    const handleChange = (event, newAlignment) => {
        setCompanyOrPerson(newAlignment);
    };
    const NewToggleButton = styled(ToggleButton)(({background}) => ({
        "&.Mui-selected, &.Mui-selected:hover": {
            color: "white",
            backgroundColor: background
        }
    }));

    return (
        <ToggleButtonGroup
            color="primary"
            value={companyOrPerson}
            exclusive
            onChange={handleChange}
            sx={{ml: '40%'}}
        >
            <NewToggleButton background="#363b5d" value={'person'}>Фіз.особа</NewToggleButton>
            <NewToggleButton background="#363b5d" value={'company'}>Юр.особа</NewToggleButton>
        </ToggleButtonGroup>
    );
}
