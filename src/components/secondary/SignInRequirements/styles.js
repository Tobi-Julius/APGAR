import { StyleSheet } from "react-native";
import { theme } from "../../../constants";
import { layout } from "../../../utils";

export const styles = StyleSheet.create({
  container: {
    width: layout.widthPixel(340),
  },
  inputContainer: {
    marginBottom: layout.pixelSizeHorizontal(12),
  },
  forgetPassword: {
    color: theme.secondary,
    fontSize: layout.size.h4,
    fontFamily: "Montserrat_400Regular",
    marginVertical: layout.pixelSizeVertical(6),
  },
  register: {
    color: theme.primary,
    fontSize: layout.size.h4,
    fontFamily: "Montserrat_400Regular",
    marginVertical: layout.pixelSizeVertical(6),
  },
  btnContainer: {
    marginTop: layout.pixelSizeVertical(20),
    borderRadius: layout.fontPixel(30),
  },
  btnText: {
    paddingVertical: layout.pixelSizeVertical(20),
    color: theme.white,
    fontFamily: "Montserrat_600SemiBold",
    fontSize: layout.size.h3,
  },
  error: {
    color: theme.secondary,
    fontFamily: "Montserrat_400Regular",
    fontSize: layout.size.h5,
  },
  inputStyle: {},
});
