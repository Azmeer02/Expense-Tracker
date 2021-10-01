import React , { createContext , useReducer } from 'react';
import AppReducer from './App Reducer';

const initialState = {
    transactions : []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [ state , dispatch ] = useReducer( AppReducer , initialState );

    function deleteTrans(id){
        dispatch({
            type : "Delete_Transactions",
            payload : id
        });
    }
    function addTrans(transaction){
        dispatch({
            type : "Add_Transactions",
            payload : transaction
        });
    }
    return(
        <GlobalContext.Provider value = {{transactions : state.transactions , deleteTrans , addTrans}}>
            {children}
        </GlobalContext.Provider>
    )
}