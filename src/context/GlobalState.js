import react,{createContext, useReducer} from "react";
import AppReducer from './AppReducer'


const initialState = {
    user: {
        hospitalId: '',
        state: '',
        city: '',
        adress: '',
        APGAR: [{
            id: Math.random() * 1000,
            activityValue: '',
            activityNumber: '',
            pulseValue: '',
            pulseNumber: '',
            grimaceValue: '',
            grimaceNumber: '',
            appearanceValue: '',
            appearanceNumber: '',
            respirationValue: '',
            respirationNumber: '',
            totalScore: '',
        }]
    }
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