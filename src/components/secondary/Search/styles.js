import { StyleSheet } from "react-native";
import { theme } from "../../../constants";
import { layout } from "../../../utils";

export const styles = StyleSheet.create({
  searchContainer: {
    marginTop: layout.fontPixel(30),
    height: layout.heightPixel(42),
    width: layout.widthPixel(360),
    fontSize: layout.size.h5,
    backgroundColor: theme.white,
  },
});
