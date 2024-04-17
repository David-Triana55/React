import React from 'react'
import './TodoSearch.css'

function TodoSearch({searchValue, setSearchValue, loading}){
    return(
        <input placeholder="cortar cebolla" 
            className='TodoSearch' 
            onChange={(event)=> {
                setSearchValue(event.target.value)
            }} 
            disabled={loading}
        />
    )
}

export {TodoSearch}