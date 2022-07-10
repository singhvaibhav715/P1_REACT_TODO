import React from 'react'
// import { BsSearch } from 'react-icons/bs'
const SearchBar = () => {
  return (
    <>
        <div className='input-group'>
            <input className='search--bar' type="text" name="" id=""  placeholder='Search Your TODOs..'/>
            {/* <BsSearch style={{paddingLeft:"15px",fontSize:"19px",fontWeight:"600"}}/> */}
        </div>
    </>
  )
}

export default SearchBar