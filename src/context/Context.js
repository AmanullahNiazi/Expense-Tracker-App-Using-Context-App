import React, { useContext ,useReducer, } from "react";
// import app reducer
import Appreducer from '../context/Appreducer'

// create initialState

const initialState = {
    transactions : [],
}
console.log(initialState)
const AppContext = React.createContext();
const AppProvider = ({children}) =>{
    // let [netBalnce,setBalance] = useState(0)
    const [state, dispatch] = useReducer(Appreducer, initialState);
    //add transaction
    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }
     // Delete Existing Transaction Action
     function delTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }
    //  function fetchBalance(balance) {
    //     dispatch({
    //         type: 'balance_aya',
    //         payload: balance
    //     });
    // }


    return <AppContext.Provider value={{
        addTransaction,
        transactions: state.transactions,
        delTransaction,
        // setBalance,
        // netBalnce,
    }} >
        {children}
    </AppContext.Provider>
}
const GlobalContext = () =>{
    return useContext(AppContext)
}
export {AppContext,AppProvider, GlobalContext,}