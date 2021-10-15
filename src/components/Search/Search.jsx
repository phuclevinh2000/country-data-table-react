import React from 'react'

import "./search.scss"


const Search = ({filters, filterChange}) => {
    console.log("ba")
    return (
        <input className="search" placeholder="Search country..." value={filters} onChange={filterChange}/>           
    )
}

export default React.memo(Search)
