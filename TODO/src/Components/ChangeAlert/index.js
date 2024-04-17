import './index.css'
import React from 'react';
import { withStorageListener } from './withStorageListener';

function ChangeAlert ({show , toogleShow}){
    if (show) {
        return (
            <div>
                <p>La información ha cambiado</p>
                <button className='button-refresh' onClick={() => {window.location.reload()}}>
                    Recargar página
                </button>
            </div>
        )
    } else {
        return null
    }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export { ChangeAlertWithStorageListener }