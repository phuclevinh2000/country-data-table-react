import React, {useState, useCallback} from 'react';
import useFetch from './hooks/useFetch';
import useDebounce from './hooks/useDebounce';

// component
import Home from './components/Home/Home';
import Header from './components/Header/Header';

//  Style
import './App.css';

function App() {

  // custom hook for fetching data
  const res = useFetch("https://restcountries.com/v2/all", {})
  const [filters, setFilters] = useState('')
  const debounceValue = useDebounce(filters, 500)
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
  const filterChange = useCallback((event) => {
      setFilters(event.target.value)
  }, [])

  // make a filter output, if find coutry name then use it, else just take the whole data
  let list = debounceValue
  ? res.response.filter(country => country.name.toLowerCase().includes(filters.toLowerCase()))
  : res.response

  return (
    <div className="App">
      <Header />
      <Home 
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        list={list}
        filterChange={filterChange}
        page={page}
        rowsPerPage={rowsPerPage}
      />
    </div>
  );
}

export default App;
