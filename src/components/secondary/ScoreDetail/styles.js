import { StyleSheet } from "react-native";
import { theme } from "../../../constants";
import { layout } from "../../../utils";

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
  headerStyle: {
    backgroundColor: theme.primary,
    paddingHorizontal: layout.pixelSizeHorizontal(10),
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: layout.pixelSizeVertical(10),
    borderTopRightRadius: layout.fontPixel(10),
    borderTopLeftRadius: layout.fontPixel(10),
  },
  text: {
    color: theme.white,
    fontFamily: "Montserrat_600SemiBold",
    fontSize: layout.size.h3,
  },
  containerStyle: {
    marginVertical: layout.pixelSizeVertical(10),
    marginHorizontal: layout.pixelSizeHorizontal(10),
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: layout.pixelSizeVertical(25),
  },
  title: {
    fontFamily: "Montserrat_400Regular",
    fontSize: layout.size.h4,
  },
  content: {
    fontFamily: "Montserrat_500Medium",
    fontSize: layout.size.h4,
  },
  score: {
    fontFamily: "Montserrat_500Medium",
    fontSize: layout.size.h4,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    paddingLeft: layout.pixelSizeHorizontal(10),
  },
  scoreContainer: {
    backgroundColor: theme.primary,
    paddingVertical: layout.heightPixel(10),
    paddingHorizontal: layout.widthPixel(15),
    borderTopLeftRadius: layout.fontPixel(15),
  },
  scoreText: {
    color: theme.white,
    fontFamily: "Montserrat_600SemiBold",
    fontSize: layout.size.h2,
    textTransform: "uppercase",
  },
  addMaternalRecordContainer: {},
  maternalHistoryContainer: {},
  addMaternalRecord: {
    fontFamily: "Montserrat_500Medium",
    fontSize: layout.fontPixel(12),
    textDecorationLine: "underline",
    color: theme.secondary,
  },
  maternalHistory: {
    fontFamily: "Montserrat_500Medium",
    fontSize: layout.fontPixel(12),
    textDecorationLine: "underline",
    color: theme.primary,
  },
});
