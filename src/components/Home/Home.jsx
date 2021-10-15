import React from 'react'

// Import Component
import Loading from '../Loading/Loading'
import Search from '../Search/Search';
import MUITable from '../MUITable/MUITable';

// Import Style
import "./home.scss"
import TablePagination from '@mui/material/TablePagination';


const Home = ({handleChangePage, handleChangeRowsPerPage, filterChange, list, filters, page, rowsPerPage}) => {
    // Loading scene when dont have data yet
    if(!list) {
        return <Loading />
    } else
    return (
        <div className="home">
            <Search 
                filters={filters}
                filterChange={filterChange}
            />
            {/* Using of MUI Table  */}
            <MUITable 
                list={list}
                page={page}
                rowsPerPage= {rowsPerPage}
            />
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
