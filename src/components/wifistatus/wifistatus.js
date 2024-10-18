import './wifistatus.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



function WifiStatus() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };

  return (
    <div>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                 <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                >
                <MenuItem value={10}>Very Good</MenuItem>
                <MenuItem value={20}>Underwhelming</MenuItem>
                <MenuItem value={30}>Very Bad</MenuItem>
                </Select>
        </FormControl>
    </div>
  );
}

export default WifiStatus;