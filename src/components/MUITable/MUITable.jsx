import React from 'react'

import numeral from 'numeral'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Hidden } from '@material-ui/core'

// Styling from MUI
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#464444",
      color: theme.palette.common.white,
      fontSize: 18,
      overflow: Hidden,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 20,
    },
  }));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const MUITable = ({list, page, rowsPerPage}) => {
    return (
        <TableContainer component={Paper} style={{borderRadius: "0"}}>
                <Table sx={{ minWidth: 200}} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Flag</StyledTableCell>
                            <StyledTableCell align="left">Name</StyledTableCell>
                            <StyledTableCell align="left">Population</StyledTableCell>
                            <StyledTableCell align="left">Lang</StyledTableCell>
                            <StyledTableCell align="left">Region</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {list
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {/* {row.flag} */}
                                {
                                    <img src={row.flag} alt="#"/>
                                }
                            </StyledTableCell>
                            <StyledTableCell align="left">{row.name}</StyledTableCell>
                            <StyledTableCell align="left">{numeral(row.population).format("0,0")}</StyledTableCell>
                            <StyledTableCell align="left">
                                {
                                    <ul>
                                    {row.languages.map(note => 
                                        <li key={note.name}>
                                            {note.name}
                                        </li>
                                    )}
                                </ul>
                                }
                            </StyledTableCell>
                        <StyledTableCell align="left">{row.region}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
    )
}

export default MUITable
