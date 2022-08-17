import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function SearchResultsTable() {
  return (
    <TableContainer sx={{ minWidth: 350, maxWidth:500}} component={Paper}>
      <Table  aria-label="simple table">
        <TableBody>

            <TableRow
              key={1}
            >
              <TableCell component="th" scope="row">Name</TableCell>
              <TableCell align="right">Luke Skywalker</TableCell>
            </TableRow>

            <TableRow
              key={2}
            >
              <TableCell component="th" scope="row">Height</TableCell>
              <TableCell align="right">About 2.5 ewoks</TableCell>
            </TableRow>

            <TableRow
              key={3}
            >
              <TableCell component="th" scope="row">Mass</TableCell>
              <TableCell align="right">Light enough to jump really high</TableCell>
            </TableRow>

            <TableRow
              key={4}
            >
              <TableCell component="th" scope="row">Hair Color</TableCell>
              <TableCell align="right">youngling blonde</TableCell>
            </TableRow>

            <TableRow
              key={5}
            >
              <TableCell component="th" scope="row">skin color</TableCell>
              <TableCell align="right">whiter than Hoth</TableCell>
            </TableRow>

            <TableRow
              key={6}
            >
              <TableCell component="th" scope="row">Birth Year</TableCell>
              <TableCell align="right">A long, long time ago</TableCell>
            </TableRow>

            <TableRow
              key={7}
            >
              <TableCell component="th" scope="row">Films</TableCell>
              <TableCell align="right">Film 1, Film 2, Film3, Film 4</TableCell>
            </TableRow>

            <TableRow
              key={8}
            >
              <TableCell component="th" scope="row">Species</TableCell>
              <TableCell align="right">Human</TableCell>
            </TableRow>


        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default SearchResultsTable;