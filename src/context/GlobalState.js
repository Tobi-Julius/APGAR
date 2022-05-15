import { createContext,useReducer } from "react";
import AppReducer from "./AppReducer"


const initialState = {
    users: [
      {
        hospitalName: 'Crimson Hospital',
        id: 1,
        state: 'ilorin',
        address: 'Tanke',
        city: 'ilorin',
        activity: 'Loose and Floppy muscle tones',
        pulse: ' less than 100 bpm',
        grimace: 'Floppy or No reaction',
        appearance: 'Blue Pale',
        respiration: 'Absent',
        score: 1,
        motherID: '02',
        deliveryMode: 'SVG',
        gestationPeriod: '10 weeks',
        birthWeight: '20kg',
        maternalHtpertension: 'No',
        fetalPosition: 'Normal',
        MSL: 'Normal',
        activityScore: '0',
        pulseScore: 1,
        grimaceScore: '0',
        appearanceScore: '0',
        respirationScore: '0',
        notificationMessage: 'An APGAR score of ID no 01 has been recorded'
    },
      {
        hospitalName: 'Crimson Hospital',
        id: 2,
        state: 'ilorin',
        address: 'Tanke',
        city: 'ilorin',
        activity: 'Loose and Floppy muscle tones',
        pulse: ' less than 100 bpm',
        grimace: 'Floppy or No reaction',
        appearance: 'Blue Pale',
        respiration: 'Absent',
        score: 1,
        motherID: '02',
        deliveryMode: 'SVG',
        gestationPeriod: '10 weeks',
        birthWeight: '20kg',
        maternalHtpertension: 'No',
        fetalPosition: 'Normal',
        MSL: 'Normal',
        activityScore: 0,
        pulseScore: 1,
        grimaceScore: 0,
        appearanceScore: 0,
        respirationScore: 0,
        notificationMessage: 'An APGAR score of ID no 02 has been recorded'

    },
      {
        hospitalName: 'Crimson Hospital',
        id: 3,
        state: 'ilorin',
        address: 'Tanke',
        city: 'ilorin',
        activity: 'Loose and Floppy muscle tones',
        pulse: ' less than 100 bpm',
        grimace: 'Floppy or No reaction',
        appearance: 'Blue Pale',
        respiration: 'Absent',
        score: 1,
        motherID: '02',
        deliveryMode: 'SVG',
        gestationPeriod: '10 weeks',
        birthWeight: '20kg',
        maternalHtpertension: 'No',
        fetalPosition: 'Normal',
        MSL: 'Normal',
        activityScore: 0,
        pulseScore: 1,
        grimaceScore: 0,
        appearanceScore: 0,
        respirationScore: 0,
        notificationMessage: 'An APGAR score of ID no 03 has been recorded'
    },
      {
        hospitalName: 'Crimson Hospital',
        id: 4,
        state: 'ilorin',
        address: 'Tanke',
        city: 'ilorin',
        activity: 'Loose and Floppy muscle tones',
        pulse: ' less than 100 bpm',
        grimace: 'Floppy or No reaction',
        appearance: 'Blue Pale',
        respiration: 'Absent',
        score: 1,
        motherID: '02',
        deliveryMode: 'SVG',
        gestationPeriod: '10 weeks',
        birthWeight: '20kg',
        maternalHtpertension: 'No',
        fetalPosition: 'Normal',
        MSL: 'Normal',
        activityScore: 0,
        pulseScore: 1,
        grimaceScore: 0,
        appearanceScore: 0,
        respirationScore: 0,
        notificationMessage: 'An APGAR score of ID no 04 has been recorded'
    },
    {
        hospitalName: 'Crimson Hospital',
        id: 5,
        state: 'ilorin',
        address: 'Tanke',
        city: 'ilorin',
        activity: 'Loose and Floppy muscle tones',
        pulse: 'less 100 bpm',
        grimace: 'Floppy or No reaction',
        appearance: 'Blue Pale',
        respiration: 'Absent',
        score: 1,
        motherID: '02',
        deliveryMode: 'SVG',
        gestationPeriod: '10 weeks',
        birthWeight: '20kg',
        maternalHtpertension: 'No',
        fetalPosition: 'Normal',
        MSL: 'Normal',
        activityScore: 0,
        pulseScore: 1,
        grimaceScore: 0,
        appearanceScore: 0,
        respirationScore: 0,
        notificationMessage: 'An APGAR score of ID no 05 has been recorded'
    },
    {
        hospitalName: 'Crimson Hospital',
        id: 6,
        state: 'ilorin',
        address: 'Tanke',
        city: 'ilorin',
        activity: 'Loose and Floppy muscle tones',
        pulse: 'less than 100 bpm',
        grimace: 'Floppy or No reaction',
        appearance: 'Blue Pale',
        respiration: 'Absent',
        score: 1,
        motherID: '02',
        deliveryMode: 'SVG',
        gestationPeriod: '10 weeks',
        birthWeight: '20kg',
        maternalHtpertension: 'No',
        fetalPosition: 'Normal',
        MSL: 'Normal',
        activityScore: 0,
        pulseScore: 1,
        grimaceScore: 0,
        appearanceScore: 0,
        respirationScore: 0,
        notificationMessage: 'An APGAR score of ID no 06 has been recorded'
    },
    {
        hospitalName: 'Crimson Hospital',
        id: 7,
        state: 'ilorin',
        address: 'Tanke',
        city: 'ilorin',
        activity: 'Loose and Floppy muscle tones',
        pulse: 'less than 100 bpm',
        grimace: 'Floppy or No reaction',
        appearance: 'Blue Pale',
        respiration: 'Absent',
        score: 1,
        motherID: '02',
        deliveryMode: 'SVG',
        gestationPeriod: '10 weeks',
        birthWeight: '20kg',
        maternalHtpertension: 'No',
        fetalPosition: 'Normal',
        MSL: 'Normal',
        activityScore: 0,
        pulseScore: 1,
        grimaceScore: 0,
        appearanceScore: 0,
        respirationScore: 0,
        notificationMessage: 'An APGAR score of ID no 07 has been recorded'
    },
    {
        hospitalName: 'Crimson Hospital',
        id: 8,
        state: 'ilorin',
        address: 'Tanke',
        city: 'ilorin',
        activity: 'Loose and Floppy muscle tones',
        pulse: 'less than 100 bpm',
        grimace: 'Floppy or No reaction',
        appearance: 'Blue Pale',
        respiration: 'Absent',
        score: 1,
        motherID: '02',
        deliveryMode: 'SVG',
        gestationPeriod: '10 weeks',
        birthWeight: '20kg',
        maternalHtpertension: 'No',
        fetalPosition: 'Normal',
        MSL: 'Normal',
        activityScore: 0,
        pulseScore: 1,
        grimaceScore: 0,
        appearanceScore: 0,
        respirationScore: 0,
        notificationMessage: 'An APGAR score of ID no 08 has been recorded'
    },
    {
        hospitalName: 'Crimson Hospital',
        id: 9,
        state: 'ilorin',
        address: 'Tanke',
        city: 'ilorin',
        activity: 'Loose and Floppy muscle tones',
        pulse: ' less than 100 bpm',
        grimace: 'Floppy or No reaction',
        appearance: 'Blue Pale',
        respiration: 'Absent',
        score: 1,
        motherID: '02',
        deliveryMode: 'SVG',
        gestationPeriod: '10 weeks',
        birthWeight: '20kg',
        maternalHtpertension: 'No',
        fetalPosition: 'Normal',
        MSL: 'Normal',
        activityScore: 0,
        pulseScore: 1,
        grimaceScore: 0,
        appearanceScore: 0,
        respirationScore: 0,
        notificationMessage: 'An APGAR score of ID no 09 has been recorded'
    },
] 
}
export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(AppReducer, initialState)
    
    // action

    const deleteTodo = (id) => {
        dispatch({
            type: "DELETE_TODO",
            payload: id
        })
    }

    const addUser = (user) =>{
        dispatch({
            type:"ADD_USER",
            payload: user
        })
    }


    return (
        <GlobalContext.Provider value={{
            users: state.users,
            deleteTodo,
            addUser
        }}>
            {children}
        </GlobalContext.Provider>
    )
}