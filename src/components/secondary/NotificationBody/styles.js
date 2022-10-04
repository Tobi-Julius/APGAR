import { StyleSheet } from "react-native";
import { theme } from "../../../constants";
import { layout } from "../../../utils";

export const styles = StyleSheet.create({
  displayTxt: {
    color: theme.text,
    fontFamily: "Montserrat_500Medium",
  },
  headerTextContainer: {
    width: layout.widthPixel(360),
    marginTop: layout.pixelSizeVertical(50),
  },
  separator: {
    width: layout.width,
    height: layout.heightPixel(1),
    backgroundColor: "lightgrey",
    marginTop: layout.pixelSizeVertical(10),
  },
  contentContainer: {
    maxWidth: layout.widthPixel(360),
    width: layout.widthPixel(370),
    marginVertical: layout.pixelSizeVertical(20),
    alignItems: "center",
  },
  messageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: layout.pixelSizeVertical(20),
  },
  message: {
    fontFamily: "Montserrat_400Regular",
    fontSize: layout.size.h4,
    marginHorizontal: layout.pixelSizeHorizontal(6),
  },
  index: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: layout.size.h4,
    backgroundColor: theme.primary,
    color: theme.text,
    paddingHorizontal: layout.pixelSizeHorizontal(12),
    paddingVertical: layout.pixelSizeVertical(9),
    borderRadius: layout.fontPixel(10),
  },
  timeStamp: {
    marginLeft: layout.pixelSizeHorizontal(7),
    color: theme.text,
    marginTop: layout.pixelSizeVertical(2),
    fontFamily: "Montserrat_400Regular",
    fontSize: layout.size.h5,
  },
});
