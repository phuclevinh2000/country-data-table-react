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
// import TablePagination from '@mui/material/TablePagination';

// Styling from MUI
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#464444",
      color: theme.palette.common.white,
      fontSize: 18,
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
    // console.log(res.response)

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
                <Table sx={{ minWidth: 400}} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell>Flag</StyledTableCell>
                        <StyledTableCell align="left">Name</StyledTableCell>
                        <StyledTableCell align="right">Population</StyledTableCell>
                        <StyledTableCell align="right">Lang</StyledTableCell>
                        <StyledTableCell align="right">Region</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {list.map((row) => (
                        <StyledTableRow key={row.name}>
                        <StyledTableCell component="th" scope="row">
                            {/* {row.flag} */}
                            {
                                <img src={row.flag} alt="#"/>
                            }
                        </StyledTableCell>
                        <StyledTableCell align="left">{row.name}</StyledTableCell>
                        <StyledTableCell align="right">{numeral(row.population).format("0,0")}</StyledTableCell>
                        <StyledTableCell align="right">
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
                        <StyledTableCell align="right">{row.region}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Home
