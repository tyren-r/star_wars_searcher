import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../styles/SearchBarStyles.css';
import SearchBarLogic from '../logic/SearchBarLogic';

function SearchBar() {
  const {searchTerm, getPersonInfo, setSearchTerm} = SearchBarLogic();
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" className="search-bar" label="May the force be with you..." onChange={(e) => setSearchTerm(e.target.value)} variant="outlined" />
      <Button className="search-button" variant="contained" onClick={() => getPersonInfo(searchTerm)}>Search</Button>
    </Box>
  );
}

export default SearchBar;