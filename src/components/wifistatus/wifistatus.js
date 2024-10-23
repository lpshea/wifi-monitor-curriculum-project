import './wifistatus.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



function WifiStatus() {
    const [status, setStatus] = React.useState('');

    const handleChange = (event) => {
      setStatus(event.target.value);
    };

  return (
    <div>
        <p>How is the campus wifi at your current location?</p>
        <FormControl variant="filled" sx={{ m: 1, minWidth: '60%' }}>
            <InputLabel id="demo-simple-select-label">Select Your Response</InputLabel>
                 <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={status}
                    label="Status"
                    onChange={handleChange}
                >
                <MenuItem value={10}>Stable</MenuItem>
                <MenuItem value={20}>Somewhat Stable</MenuItem>
                <MenuItem value={30}>Unstable</MenuItem>
                </Select>
        </FormControl>
    </div>
  );
}

export default WifiStatus;