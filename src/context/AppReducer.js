export default (state, action) => {
  switch (action.type) {
    case "DELETE_PATIENT":
      return {
        patients: state.patients.filter((patient) => {
          return patient.id !== action.payload;
        }),
      };

    case "ADD_PATIENT":
      return {
        patients: [...state.patients, action.payload],
      };
    default:
      return state;
  }
};
