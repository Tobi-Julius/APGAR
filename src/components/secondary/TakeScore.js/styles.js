import { StyleSheet } from "react-native";
import { layout } from "../../../utils";
import { theme } from "../../../constants";

export const styles = StyleSheet.create({
  container: {
    marginVertical: layout.pixelSizeVertical(50),
  },
  contentContainer: {
    width: layout.widthPixel(340),
  },
  picker: {
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: layout.fontPixel(6),
    marginVertical: layout.pixelSizeVertical(5),
  },
  title: {
    fontFamily: "Montserrat_500Medium",
  },
  pickerContainer: {
    marginVertical: layout.pixelSizeVertical(10),
  },
  btnContainer: {
    marginVertical: layout.pixelSizeVertical(25),
    padding: layout.pixelSizeVertical(18),
    borderRadius: layout.fontPixel(30),
  },
  btnText: {
    fontFamily: "Montserrat_600SemiBold",
    color: theme.white,
    fontSize: layout.size.h3,
  },
});
