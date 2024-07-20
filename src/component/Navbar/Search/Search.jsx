import React from 'react'
import"./Search.css";
import { Link } from 'react-router-dom';

const Search = () => {
  return (
    <div className='Search-sec'>
     <input type='search ' placeholder='Search'></input>
     <Link><i class="bi bi-search"></i></Link>
     

    </div>
  )
}

export default Search
