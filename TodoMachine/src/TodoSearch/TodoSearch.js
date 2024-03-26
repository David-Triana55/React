import React from 'react'
import './TodoSearch.css'
import { TodoContext } from '../TodoContext/CreateContext'

function TodoSearch(){
    const {searchValue, setSearchValue} =  React.useContext(TodoContext)
    return(
        <input placeholder="cortar cebolla" 
            className='TodoSearch' 
            onChange={(event)=> {
                setSearchValue(event.target.value)
            }} 
        />
    )
}

export {TodoSearch}