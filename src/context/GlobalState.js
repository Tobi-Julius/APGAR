import react,{createContext, useReducer} from "react";
import AppReducer from './AppReducer'


const initialState = {
    user: [ {id: 10}]
}

export let GlobalContext = createContext(initialState)

export let GlobalProvider = ({children}) => {
    let [state, dispatch] = useReducer(AppReducer, initialState)


    return (
        <GlobalContext.Provider value={{
            user: state.user,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}