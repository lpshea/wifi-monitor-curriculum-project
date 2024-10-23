import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import React from 'react';

function WifiStatus({ onSubmit, formData }) {
  const [status, setStatus] = React.useState('');

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const handleSubmit = () => {
    if (status && formData.location) {
      onSubmit(status);
    } else {
      alert('Please select both a location and Wi-Fi status before submitting.');
    }
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
          <MenuItem value="Stable">Stable</MenuItem>
          <MenuItem value="Somewhat Stable">Somewhat Stable</MenuItem>
          <MenuItem value="Unstable">Unstable</MenuItem>
        </Select>
      </FormControl>
      <Stack spacing={2} direction="row" sx={{ m: 1, minWidth: '40%', minHeight: '40px', marginTop: '20px', justifyContent: 'center' }}>
        <Button variant="outlined" onClick={handleSubmit}>Submit Feedback</Button>
        <Button variant="outlined" onClick={() => setStatus('')}>Clear Response</Button>
      </Stack>
    </div>
  );
}

export default WifiStatus;
