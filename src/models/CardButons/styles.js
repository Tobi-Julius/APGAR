import { StyleSheet } from "react-native";
import { theme } from "../../constants";
import { layout } from "../../utils";

export const styles = StyleSheet.create({
  contentContainer: {
    width: layout.widthPixel(340),
  },
  skipBtnText: {
    fontSize: layout.heightPixel(11),
    fontFamily: "Montserrat_500Medium",
    paddingVertical: layout.pixelSizeVertical(14),
    paddingHorizontal: layout.pixelSizeHorizontal(18),
    backgroundColor: "white",
    color: theme.primary,
  },
  addBtnText: {
    fontSize: layout.heightPixel(11),
    fontFamily: "Montserrat_500Medium",
    paddingVertical: layout.pixelSizeVertical(14),
    paddingHorizontal: layout.pixelSizeHorizontal(22),
    color: theme.white,
  },
  skipBtnContainer: {
    borderWidth: layout.fontPixel(1.8),
    borderColor: theme.primary,
    borderRadius: layout.fontPixel(4),
  },
  addBtnContainer: {
    borderWidth: layout.fontPixel(1.8),
    borderRadius: layout.fontPixel(4),
    borderColor: theme.primary,
  },
  cautionText: {
    fontFamily: "Montserrat_500Medium",
    fontSize: layout.size.h5,
    color: theme.text,
    marginHorizontal: layout.pixelSizeHorizontal(6),
  },
  cautionContainer: {
    width: layout.widthPixel(340),
    flexDirection: "row",
    alignItems: "center",
    marginVertical: layout.pixelSizeVertical(30),
  },
});
