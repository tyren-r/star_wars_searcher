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
  const tableHeaderValues = ["Name", "Height", "Mass", "Hair Color", "Skin Color", "Birth Year"]
  return (
    <div className="table-container">
    <TableContainer component={Paper}>
      <Table sx={{backgroundColor:'grey'}}  aria-label="simple table">
        <TableHead>
          <TableRow key={1}>
            {tableHeaderValues.map((headerValue)=>(
              <TableCell sx={{color:'white'}} component="th" scope="row">{headerValue}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
              <TableRow
            >
              {Object.values(props.data[0].properties).map((result)=> (
                <TableCell sx={{color:'white'}}>{result}</TableCell>
              ))}
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default SearchResultsTable;