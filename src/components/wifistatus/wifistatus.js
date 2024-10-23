import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

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
        <Stack spacing={2} direction="row" sx={{ m: 1, minWidth: '40%', minHeight: '40px', marginTop: '20px', justifyContent: "center"}}>
          <Button variant="outlined"> Submit Feedback</Button>
          <Button variant="outlined">Clear Response</Button>
      </Stack>
    </div>
  );
}

export default WifiStatus;