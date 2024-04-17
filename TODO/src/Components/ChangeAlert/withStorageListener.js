import React, { useState } from 'react';

function withStorageListener (WrappedComponent){
    return function WrappedComponentWithStorageListener(props){
        const [storage, setStorage] = useState(false)


        window.addEventListener('storage', (change) => {
            console.log('hahah');
            if(change.key === 'todo') {
                console.log('hubo cambios en el local Storage');
                setStorage(true)
            }
        })

        return (
            <WrappedComponent 
                show={storage}
                toggleShow={setStorage}
            />
        )
    }
}

export { withStorageListener}