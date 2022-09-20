import { StyleSheet } from "react-native";
import { theme } from "../../../constants";
import { layout } from "../../../utils";

export const styles = StyleSheet.create({
  contentContainer: {
    width: layout.widthPixel(340),
    marginVertical: layout.pixelSizeVertical(50),
  },
  Picker: {
    borderColor: "lightgrey",
    borderWidth: 1,
    borderRadius: layout.fontPixel(5),
    marginTop: layout.pixelSizeVertical(5),
  },
  container: {
    marginVertical: layout.pixelSizeVertical(15),
  },
  btnContainer: {
    marginTop: layout.pixelSizeVertical(80),
    paddingVertical: layout.pixelSizeVertical(20),
    borderRadius: layout.fontPixel(30),
  },
  btnTextStyle: {
    color: theme.white,
    fontFamily: "Montserrat_600SemiBold",
    fontSize: layout.size.h3,
  },
  text: {
    fontFamily: "Montserrat_500Medium",
    fontSize: layout.size.h4,
  },
  inputStyle: {
    fontFamily: "Montserrat_500Medium",
  },
  inputContainer: {
    fontFamily: "Montserrat_500Medium",
  },
  error: {
    color: theme.secondary,
    fontFamily: "Montserrat_400Regular",
    fontSize: layout.size.h5,
  },
});
