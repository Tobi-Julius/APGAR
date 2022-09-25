import { StyleSheet } from "react-native";
import { theme } from "../../constants";
import { layout } from "../../utils";

export const styles = StyleSheet.create({
  container: {
    width: layout.widthPixel(300),
    marginVertical: layout.pixelSizeVertical(40),
  },
  modalHeader: {
    alignItems: "center",
    marginBottom: layout.pixelSizeVertical(50),
  },
  deleteUser: {
    fontFamily: "Montserrat_700Bold",
    fontSize: layout.size.h1,
    color: theme.secondary,
  },
  id: {
    color: theme.text,
    fontSize: layout.size.h3,
    fontFamily: "Montserrat_500Medium",
    marginVertical: layout.pixelSizeVertical(10),
  },
  deleteContainer: {
    backgroundColor: theme.secondary,
    borderRadius: layout.fontPixel(20),
  },
  deleteText: {
    fontFamily: "Montserrat_500Medium",
    color: theme.white,
    paddingVertical: layout.pixelSizeVertical(13),
  },
  dismissContainer: {
    backgroundColor: theme.primary,
    borderRadius: layout.fontPixel(20),
    marginTop: layout.pixelSizeVertical(10),
  },
  dismissText: {
    fontFamily: "Montserrat_500Medium",
    color: theme.white,
    paddingVertical: layout.pixelSizeVertical(13),
  },
  userDeleteContainer: {
    marginVertical: layout.pixelSizeVertical(30),
    flexDirection: "row",
    alignItems: "flex-end",
  },
  userDelete: {
    fontFamily: "Montserrat_500Medium",
    fontSize: layout.size.h5,
  },
});
