import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../styles/SearchBarStyles.css';

function SearchBar() {
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" className="search-bar" label="May the force be with you..." variant="outlined" />
      <Button className="search-button" variant="contained">Search</Button>
    </Box>
  );
}

export default SearchBar;