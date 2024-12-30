import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../styles/search-results-styles.css';

function SearchResultsTable(props) {
  return (
    <div className="table-container">
    <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow key={1}>
            <TableCell component="th" scope="row">Name</TableCell>
            <TableCell component="th" scope="row">Height</TableCell>
            <TableCell component="th" scope="row">Mass</TableCell>
            <TableCell component="th" scope="row">Hair Color</TableCell>
            <TableCell component="th" scope="row">skin color</TableCell>
            <TableCell component="th" scope="row">Birth Year</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
              <TableRow
            >
              <TableCell >{props.data[0].properties.name}</TableCell>
              <TableCell >{props.data[0].properties.height}</TableCell>
              <TableCell >{props.data[0].properties.mass}</TableCell>
              <TableCell >{props.data[0].properties.hair_color}</TableCell>
              <TableCell >{props.data[0].properties.hair_color}</TableCell>
              <TableCell >{props.data[0].properties.birth_year}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default SearchResultsTable;