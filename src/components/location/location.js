import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

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
            <Button variant="outlined" sx={{ m: 1, minWidth: '40%', minHeight: '40px', marginTop: '20px', marginBottom: '30px'}}>Reset Location</Button>
        </div>
      );
      }
  
  export default Location;
