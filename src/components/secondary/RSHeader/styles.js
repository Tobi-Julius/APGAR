import { StyleSheet } from "react-native";
import { theme } from "../../../constants";
import { layout } from "../../../utils";

export const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: theme.white,
  },
  container: {
    marginTop: layout.pixelSizeVertical(10),
    width: layout.widthPixel(340),
    alignItems: "center",
  },
  image: {
    width: layout.widthPixel(271),
    height: layout.heightPixel(132),
    resizeMode: "contain",
  },
  text: {
    marginVertical: layout.pixelSizeVertical(32),
    fontFamily: "Montserrat_600SemiBold",
    color: theme.primary,
    fontSize: layout.size.h2,
  },
});
