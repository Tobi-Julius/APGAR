import { StyleSheet } from "react-native";
import { theme } from "../../../constants";
import { layout } from "../../../utils";

export const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: theme.white,
  },
  container: {
    width: layout.widthPixel(340),
  },
  inputStyle: {
    fontFamily: "Montserrat_500Medium",
  },
  inputContainer: {
    marginBottom: layout.pixelSizeVertical(5),
    fontFamily: "Montserrat_500Medium",
  },
  signin: {
    color: theme.primary,
    textDecorationLine: "underline",
    fontSize: layout.size.h4,
    marginTop: layout.pixelSizeVertical(10),
    fontFamily: "Montserrat_500Medium",
  },
  btnContainer: {
    marginTop: layout.pixelSizeVertical(40),
    marginBottom: layout.pixelSizeVertical(80),
    borderRadius: layout.fontPixel(30),
  },
  btnText: {
    paddingVertical: layout.pixelSizeVertical(20),
    color: theme.white,
    fontFamily: "Montserrat_600SemiBold",
    fontSize: layout.size.h3,
  },
  bottomSheetContainer: {
    backgroundColor: "#fcfcfc",
    flex: 1,
    padding: layout.pixelSizeHorizontal(20),
    alignItems: "center",
  },
  handleStyle: {
    backgroundColor: theme.primary,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  contentContainer: {
    width: layout.widthPixel(200),
    alignItems: "center",
    marginVertical: layout.pixelSizeVertical(35),
  },
  sucess: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: layout.size.h2,
    color: theme.primary,
    marginBottom: layout.pixelSizeHorizontal(90),
  },
  welcomeText: {
    fontFamily: "Montserrat_500Medium",
    fontSize: layout.size.h4,
    color: theme.primary,
  },
  email: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: layout.size.h4,
    color: theme.primary,
    marginTop: layout.pixelSizeVertical(40),
  },
  keepSafe: {
    fontFamily: "Montserrat_500Medium",
    fontSize: layout.size.h4,
    color: theme.secondary,
  },
  modalBtnContainer: {
    marginVertical: layout.pixelSizeVertical(50),
    borderRadius: layout.fontPixel(10),
  },
  modalBtnText: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: layout.size.h4,
    color: theme.white,
    paddingVertical: layout.pixelSizeVertical(18),
    paddingHorizontal: layout.pixelSizeHorizontal(50),
  },
  bottomSheet: {},
});
