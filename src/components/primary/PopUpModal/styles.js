import { StyleSheet } from "react-native";
import { theme } from "../../../constants";
import { layout } from "../../../utils";

export const styles = StyleSheet.create({
  centered_view: {
    alignItems: "center",
    justifyContent: "center",
    height: layout.height,
    width: layout.width,
  },
  warning_modal: {
    backgroundColor: theme.white,
    height: layout.heightPixel(250),
    width: layout.widthPixel(250),
    justifyContent: "space-between",
  },
  warningHeaderContainer: {
    backgroundColor: theme.secondary,
    padding: layout.pixelSizeVertical(15),
    alignItems: "center",
  },
  warningHeaderText: {
    fontFamily: "Montserrat_600SemiBold",
    color: theme.white,
  },
  bodyContent: {
    marginVertical: layout.pixelSizeVertical(30),
    alignItems: "center",
  },
  warningText: {
    color: theme.text,
    fontFamily: "Montserrat_500Medium",
  },
  modalBtnContainer: {
    backgroundColor: theme.primary,
    padding: layout.pixelSizeVertical(10),
  },
  modalBtnText: {
    textAlign: "center",
    color: theme.white,
    fontFamily: "Montserrat_500Medium",
  },
});
