import React, { useState } from "react";
import { PaperSelect } from "react-native-paper-select";
import { theme } from "../../constants";
import { layout } from "../../utils";

export const Picker = () => {
  const [state, setState] = useState({
    value: "",
    error: "",
    selectedList: [],
    list: [
      { _id: "1", value: "Abia" },
      { _id: "2", value: "Abuja" },
      { _id: "4", value: "Adamawa" },
      { _id: "5", value: "Anambra" },
      { _id: "6", value: "Akwa Ibom" },
      { _id: "7", value: "Bauchi" },
      { _id: "8", value: "Bayelsa" },
      { _id: "9", value: "Benue" },
      { _id: "10", value: "Borno" },
      { _id: "11", value: "Cross River" },
      { _id: "12", value: "Delta" },
      { _id: "13", value: "Ebonyi" },
      { _id: "14", value: "Edo" },
      { _id: "15", value: "Enugu" },
      { _id: "16", value: "Gombe" },
      { _id: "17", value: "Imo" },
      { _id: "18", value: "Jigawa" },
      { _id: "19", value: "Kaduna" },
      { _id: "20", value: "Kano" },
      { _id: "21", value: "Katsina" },
      { _id: "22", value: "Kebbi" },
      { _id: "23", value: "Kogi" },
      { _id: "24", value: "Kwara" },
      { _id: "25", value: "Lagos" },
      { _id: "26", value: "Nasarawa" },
      { _id: "27", value: "Niger" },
      { _id: "28", value: "Ogun" },
      { _id: "29", value: "Ondo" },
      { _id: "30", value: "Osun" },
      { _id: "31", value: "Oyo" },
      { _id: "32", value: "Plateau" },
      { _id: "33", value: "Rivers" },
      { _id: "34", value: "Sokoto" },
      { _id: "35", value: "Taraba" },
      { _id: "36", value: "Yobe" },
      { _id: "37", value: "Zamfara" },
    ],
  });
  return (
    <PaperSelect
      label="State"
      value={state.value}
      onSelection={(value) => {
        setState({
          ...state,
          value: value.text,
          selectedList: value.selectedList,
          error: "",
        });
      }}
      arrayList={[...state.list]}
      selectedArrayList={state.selectedList}
      errorText={state.error}
      multiEnable={false}
      dialogTitleStyle={{
        color: theme.primary,
        fontFamily: "Montserrat_500Medium",
      }}
      searchStyle={{
        iconColor: theme.primary,
        borderRadius: layout.fontPixel(30),
        backgroundColor: theme.background,
      }}
      checkboxColor={theme.primary}
      checkboxLabelStyle={{ fontFamily: "Montserrat_500Medium" }}
      textInputBackgroundColor={theme.white}
      checkboxUncheckedColor={theme.text}
      textInputMode="outlined"
      textInputHeight={layout.heightPixel(43)}
      containerStyle={{
        borderRadius: layout.fontPixel(20),
        marginBottom: layout.pixelSizeVertical(8),
      }}
      dialogButtonLabelStyle={{
        fontFamily: "Montserrat_500Medium",
        color: theme.primary,
      }}
      textInputStyle={{
        fontFamily: "Montserrat_500Medium",
        color: "red",
      }}
      outlineColor="lightgrey"
    />
  );
};
