export default (state,action) => {
    switch(action.type){
        case "Delete_Transactions" :
            return {
                ...state,
                transactions : state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case "Add_Transactions" :
            return {
                ...state,
                transactions : [action.payload , ...state.transactions]
            }
        default:
            return state;
    }
}