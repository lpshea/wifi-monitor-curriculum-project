import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Location({ onLocationChange }) {
  const [location, setLocation] = React.useState('');

  const handleChange = (event) => {
    const selectedLocation = event.target.value;
    setLocation(selectedLocation);
    onLocationChange(selectedLocation);
  };

  return (
    <div>
      <p>Where are you located?</p>
      <FormControl variant="filled" sx={{ m: 1, minWidth: '60%' }}>
        <InputLabel id="demo-simple-select-label">Select Current Location</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={location}
          label="Location"
          onChange={handleChange}
        >
          <MenuItem value="ASUC Student Union">ASUC Student Union</MenuItem>
          <MenuItem value="Dwinelle Hall">Dwinelle Hall</MenuItem>
          <MenuItem value="Moffitt Library">Moffitt Library</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default Location;
