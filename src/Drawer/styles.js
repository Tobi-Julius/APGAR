import { StyleSheet } from "react-native";
import { theme } from "../constants";
import { layout } from "../utils";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.primary,
    marginBottom: layout.pixelSizeHorizontal(50),
  },
  headerContainer: {
    height: layout.heightPixel(165),
    padding: layout.pixelSizeVertical(10),
    justifyContent: "center",
  },
  icon: {
    alignSelf: "flex-end",
    right: layout.pixelSizeHorizontal(10),
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  styleIcon: {
    width: layout.widthPixel(20),
    height: layout.heightPixel(20),
  },
  circleContainer: {
    width: layout.widthPixel(140),
    height: layout.heightPixel(140),
    backgroundColor: "#fcfcfc",
    position: "absolute",
    bottom: -layout.pixelSizeHorizontal(70),
    alignSelf: "center",
    borderRadius: layout.fontPixel(70),
    justifyContent: "center",
    alignItems: "center",
  },
  styleImage: {
    marginBottom: layout.pixelSizeHorizontal(25),
    width: layout.widthPixel(50),
    height: layout.heightPixel(50),
  },
  firstLetterStyle: {
    backgroundColor: theme.text,
    width: layout.widthPixel(40),
    height: layout.heightPixel(40),
    borderRadius: layout.fontPixel(20),
  },
  number: {
    color: theme.primary,
    fontSize: layout.size.h1,
    textTransform: "uppercase",
    fontFamily: "Montserrat_600SemiBold",
  },
  footer: {
    flexDirection: "row",
    margin: layout.pixelSizeVertical(30),
    alignItems: "center",
  },
  logOut: {
    marginHorizontal: layout.pixelSizeHorizontal(10),
    fontFamily: "Montserrat_500Medium",
    fontSize: layout.size.h3,
  },
});
