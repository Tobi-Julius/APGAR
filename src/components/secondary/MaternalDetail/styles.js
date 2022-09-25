import { StyleSheet } from "react-native";
import { layout } from "../../../utils";
import { theme } from "../../../constants";

export const styles = StyleSheet.create({
  container: {
    width: layout.widthPixel(340),
    height: layout.height - layout.heightPixel(190),
    marginVertical: layout.pixelSizeVertical(110),
    alignItems: "center",
  },
  contentContainer: {
    width: layout.widthPixel(300),
    height: layout.heightPixel(450),
    backgroundColor: theme.background,
    borderRadius: layout.fontPixel(10),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.09,
    shadowRadius: layout.fontPixel(5),
    elevation: 3,
  },
  table: {
    marginTop: layout.pixelSizeVertical(50),
  },
  cancelBtn: {
    position: "absolute",
    right: layout.pixelSizeHorizontal(20),
    top: layout.pixelSizeVertical(20),
  },
  X: {
    fontFamily: "Montserrat_500Medium",
    fontSize: layout.size.h2,
    color: theme.secondary,
  },
  textVarContainer: {
    marginVertical: layout.pixelSizeVertical(20),
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: layout.pixelSizeHorizontal(10),
  },
  title: {
    fontFamily: "Montserrat_500Medium",
    fontSize: layout.size.h4,
  },
  var: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: layout.size.h4,
  },
  footerContainer: {
    position: "absolute",
    bottom: 0,
    backgroundColor: theme.primary,
    width: "100%",
    paddingVertical: layout.pixelSizeVertical(15),
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: layout.fontPixel(10),
    borderBottomRightRadius: layout.fontPixel(10),
  },
  footerText: {
    color: theme.white,
    fontFamily: "Montserrat_700Bold",
    fontSize: layout.size.h2,
  },
  separator: {
    width: "90%",
    height: 1,
    backgroundColor: theme.text,
  },
});
