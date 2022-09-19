import { StyleSheet } from "react-native";
import { theme } from "../../../constants";
import { layout } from "../../../utils";

export const styles = StyleSheet.create({
  container: {
    height: layout.heightPixel(190),
    width: layout.width,
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: theme.primary,
  },
  innerContainer: {
    backgroundColor: theme.white,
    marginBottom: -layout.pixelSizeVertical(30),
    width: layout.widthPixel(340),
    height: layout.heightPixel(75),
    borderRadius: layout.fontPixel(30),
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: layout.pixelSizeHorizontal(10),
  },
  text: {
    fontFamily: "Montserrat_700Bold",
    fontSize: layout.heightPixel(19),
    color: theme.primary,
  },
});
