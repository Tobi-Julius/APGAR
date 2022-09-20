import { StyleSheet } from "react-native";
import { theme } from "../../constants";
import { layout } from "../../utils";

export const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: layout.pixelSizeVertical(105),
    width: layout.widthPixel(270),
    height: layout.heightPixel(330),
    backgroundColor: theme.white,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: layout.fontPixel(15),
    shadowColor: "black",
    elevation: layout.fontPixel(9),
    shadowOffset: {
      width: 0,
      height: layout.widthPixel(4),
    },
    shadowOpacity: layout.fontPixel(0.32),
    shadowRadius: layout.fontPixel(5.46),
  },

  staticText: {
    fontFamily: "Montserrat_500Medium",
    fontSize: layout.size.h3,
  },
  varContainer: {
    marginVertical: layout.pixelSizeVertical(30),
    alignItems: "center",
  },
  score: {
    color: theme.secondary,
    fontFamily: "Montserrat_700Bold",
    fontSize: layout.size.h2,
  },
  condition: {
    fontFamily: "Montserrat_400Regular",
    fontSize: layout.size.h5,
    marginVertical: layout.pixelSizeVertical(6),
  },
  footer: {
    width: layout.widthPixel(270),
    height: layout.heightPixel(45),
    backgroundColor: theme.primary,
    position: "absolute",
    bottom: 0,
    borderBottomLeftRadius: layout.fontPixel(15),
    borderBottomRightRadius: layout.fontPixel(15),
  },
});
