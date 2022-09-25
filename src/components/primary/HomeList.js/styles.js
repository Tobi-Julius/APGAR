import { StyleSheet } from "react-native";
import { theme } from "../../../constants";
import { layout } from "../../../utils";

export const styles = StyleSheet.create({
  container: {
    height: layout.heightPixel(140),
    width: layout.widthPixel(140),
    marginTop: layout.pixelSizeVertical(5),
    borderRadius: layout.fontPixel(15),
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: layout.fontPixel(15),
  },
  topBlurContainer: {
    position: "absolute",
    top: layout.pixelSizeVertical(10),
    right: layout.pixelSizeHorizontal(10),
    paddingHorizontal: layout.pixelSizeHorizontal(8),
    paddingVertical: layout.pixelSizeVertical(4),
    alignItems: "center",
    borderRadius: layout.fontPixel(5),
  },
  bottomBlurContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingVertical: layout.pixelSizeVertical(6),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  id: {
    fontFamily: "Montserrat_400Regular",
    fontSize: layout.size.h5,
    color: theme.text,
  },
  idVar: {
    color: theme.primary,
    fontFamily: "Montserrat_500Medium",
    fontSize: layout.size.h5,
  },
  score: {
    fontFamily: "Montserrat_500Medium",
  },
});
