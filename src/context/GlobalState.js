import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  patients: [],
};

const userAuthContext = createContext();

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // action

  const deletePatient = (id) => {
    dispatch({
      type: "DELETE_PATIENT",
      payload: id,
    });
  };

  const addPatient = (patient) => {
    dispatch({
      type: "ADD_PATIENT",
      payload: patient,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        patients: state.patients,
        deletePatient,
        addPatient,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
