import { useEffect, useReducer } from "react"

function useLocalStorage(itemName, initialValue) {

    const [state, dispatch] = useReducer(reducer, initialstate({initialValue}))

    const {
        error,
        loading,
        item
    } = state

            
    const onError = (error) => dispatch({type: actionTypes.error, paylod: error})
    const onSuccess = (item) => dispatch({type: actionTypes.success, paylod: item })
    const onSave = (item) => dispatch({type: actionTypes.save, paylod: item})
    useEffect(() => {
        setTimeout(()=>{
            try{
                const localStorageItem = localStorage.getItem(itemName)
    
                let parsedItem
    
                if(!localStorageItem){
                    parsedItem = initialValue
                    localStorage.setItem(itemName, JSON.stringify(initialValue))
                } else {
                    parsedItem = JSON.parse(localStorageItem)
                }
                onSuccess(parsedItem)
                

            }catch(error){
                onError(error)
            }
        }, 2000)
    },[])

    const saveItem = (newItem) => {
        try{
            localStorage.setItem(itemName, JSON.stringify(newItem))
            onSave(newItem)
        } catch(error){
            onError(error)
        }
    }

    return {item, saveItem, loading, error}
}

export {useLocalStorage} 

const initialstate = ({initialValue}) =>({ 
    loading: true,
    error: false,
    item: initialValue,
})

const actionTypes = {
    error: 'ERROR',
    success: 'SUCCESS',
    save: 'SAVE',
}


const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.error:
            return {
                ...state,
                error: true
            }
        case actionTypes.success:
            return {
                ...state,
                error: false,
                loading: false, 
                item: action.paylod
            }

        case actionTypes.save:
            return {
                ...state,
                item: action.paylod
            }
    }
}