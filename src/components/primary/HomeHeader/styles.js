import { StyleSheet } from "react-native";
import { theme } from "../../../constants";
import { layout } from "../../../utils";

export const styles = StyleSheet.create({
  container: {
    height: layout.heightPixel(210),
    width: layout.width,
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: theme.primary,
    paddingVertical: layout.fontPixel(20),
  },
  innerContainer: {
    width: layout.widthPixel(360),
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imageLogo: {
    height: layout.heightPixel(50),
    width: layout.widthPixel(180),
  },
  imageIcon: {
    height: layout.heightPixel(20),
    width: layout.widthPixel(20),
  },
});
