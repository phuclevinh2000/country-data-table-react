import React, {useState} from 'react'
import useFetch from '../../hooks/useFetch'

// Import Component
import Header from '../Header/Header'
import Loading from '../Loading/Loading'

// Import Style
import "./home.scss"
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
import TablePagination from '@mui/material/TablePagination';

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



const Home = () => {
    // custom hook for fetching data
    const res = useFetch("https://restcountries.com/v2/all", {})
    const [filters, setFilters] = useState('')
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);  //set initial the rows per page to 5
    // console.log(res.response)

    // Function to handle next page click
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    // take the value of the input
    const filterChange = (event) => {
        setFilters(event.target.value)
    }

    // make a filter output, if find coutry name then use it, else just take the whole data
    let list = filters
    ? res.response.filter(country => country.name.toLowerCase().includes(filters.toLowerCase()))
    : res.response
    
    // Loading scene when dont have data yet
    if(!res.response) {
        return <Loading />
    } else
    return (
        <div className="home">
            <Header />
            <input className="search" placeholder="Search country..." value={filters} onChange={filterChange}/>
            {/* Using of MUI Table  */}
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
            {/* Adding the Pagination */}
            <TablePagination
                rowsPerPageOptions={[5, 10, 20, 250]}
                component="div"
                count={list.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </div>
    )
}

export default Home
