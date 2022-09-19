import { StyleSheet } from "react-native";
import { layout } from "../../../utils";
import { theme } from "../../../constants";

export const styles = StyleSheet.create({
  contentContainer: {
    width: layout.widthPixel(340),
    marginVertical: layout.pixelSizeVertical(50),
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
    marginTop: layout.pixelSizeVertical(130),
    padding: layout.pixelSizeVertical(18),
    borderRadius: layout.fontPixel(30),
  },
  btnText: {
    fontFamily: "Montserrat_600SemiBold",
    color: theme.white,
    fontSize: layout.size.h3,
  },
});
