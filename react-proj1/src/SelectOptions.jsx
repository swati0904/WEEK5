import React, { useState } from 'react';
import {
  Container,
  Card,
  CardContent,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
  AppBar,
} from '@mui/material';

const SelectOptions = () => {
  const [dropdown1Options, setDropdown1Options] = useState([]);
  const [dropdown2Options, setDropdown2Options] = useState([]);
  const [dropdown3Options, setDropdown3Options] = useState([]);

  const handleDropdown1Change = (event) => {
    setDropdown1Options(event.target.value);
  };

  const handleDropdown2Change = (event) => {
    setDropdown2Options(event.target.value);
  };

  const handleDropdown3Change = (event) => {
    setDropdown3Options(event.target.value);
  };

  const handleApplyClick = () => {
    // Do something with the selected options, e.g., send them to the backend
    console.log('Dropdown 1 selected:', dropdown1Options);
    console.log('Dropdown 2 selected:', dropdown2Options);
    console.log('Dropdown 3 selected:', dropdown3Options);
  };

  return (
    <Container
      
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', width:'100vw' }}
    >
      
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Select Options
          </Typography>

          {/* Dropdown 1 */}
          <FormControl fullWidth style={{ marginBottom: '1rem' }}>
            <InputLabel id="dropdown1-label">Dropdown 1</InputLabel>
            <Select
              labelId="dropdown1-label"
              id="dropdown1"
              multiple
              value={dropdown1Options}
              onChange={handleDropdown1Change}
              renderValue={(selected) => selected.join(', ')}
            >
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
              <MenuItem value="option3">Option 3</MenuItem>
            </Select>
          </FormControl>

          {/* Dropdown 2 */}
          <FormControl fullWidth style={{ marginBottom: '1rem' }}>
            <InputLabel id="dropdown2-label">Dropdown 2</InputLabel>
            <Select
              labelId="dropdown2-label"
              id="dropdown2"
              multiple
              value={dropdown2Options}
              onChange={handleDropdown2Change}
              renderValue={(selected) => selected.join(', ')}
            >
              <MenuItem value="optionA">Option A</MenuItem>
              <MenuItem value="optionB">Option B</MenuItem>
              <MenuItem value="optionC">Option C</MenuItem>
            </Select>
          </FormControl>

          {/* Dropdown 3 */}
          <FormControl fullWidth style={{ marginBottom: '1rem' }}>
            <InputLabel id="dropdown3-label">Dropdown 3</InputLabel>
            <Select
              labelId="dropdown3-label"
              id="dropdown3"
              multiple
              value={dropdown3Options}
              onChange={handleDropdown3Change}
              renderValue={(selected) => selected.join(', ')}
            >
              <MenuItem value="itemX">Item X</MenuItem>
              <MenuItem value="itemY">Item Y</MenuItem>
              <MenuItem value="itemZ">Item Z</MenuItem>
            </Select>
          </FormControl>

          {/* Apply Button */}
          <Button variant="contained" color="primary" onClick={handleApplyClick}>
            Apply
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default SelectOptions;
