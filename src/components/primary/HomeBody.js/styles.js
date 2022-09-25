import { StyleSheet } from "react-native";
import { theme } from "../../../constants";
import { layout } from "../../../utils";

export const styles = StyleSheet.create({
  container: {
    width: layout.widthPixel(370),
    paddingVertical: layout.pixelSizeVertical(17),
  },
  contentContainer: {
    height: layout.heightPixel(210),
    width: layout.widthPixel(370),
    marginVertical: layout.pixelSizeVertical(6),
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: layout.fontPixel(18),
  },
  blurContainer: {
    backgroundColor: "gray",
    width: "100%",
    height: layout.heightPixel(40),
    position: "absolute",
    bottom: 0,
    borderBottomRightRadius: layout.fontPixel(15),
    borderBottomLeftRadius: layout.fontPixel(16),
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: layout.pixelSizeHorizontal(4),
  },
  title: {
    flex: 3,
    fontFamily: "Montserrat_500Medium",
    fontWeight: "600",
    fontSize: layout.size.h5,
  },
  btnContainer: {
    flex: 1.3,
    borderRadius: layout.fontPixel(7),
  },
  inputStyle: {
    paddingVertical: layout.pixelSizeVertical(8),
    color: theme.white,
    fontFamily: "Montserrat_400Regular",
    fontSize: layout.size.h5,
  },
});
