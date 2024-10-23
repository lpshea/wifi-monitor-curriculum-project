import './location.css';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Location() {
  const [location, setLocation] = React.useState('');

  const handleChange = (event) => {
    setLocation(event.target.value);
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
                    <MenuItem value={10}>ASUC Student Union </MenuItem>
                    <MenuItem value={20}>Dwinelle Hall</MenuItem>
                    <MenuItem value={30}>Moffitt Library</MenuItem>
                    </Select>
            </FormControl>
        </div>
      );
      }
  
  export default Location;
