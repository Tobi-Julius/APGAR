import { StyleSheet } from "react-native";
import { theme } from "../../../constants";
import { layout } from "../../../utils";

export const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: "#fcfcfc",
    marginBottom: 20,
    paddingVertical: layout.pixelSizeHorizontal(20),
    paddingHorizontal: layout.pixelSizeHorizontal(10),
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
  cardHeadContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardBodyContainer: {
    flexDirection: "row",
    marginTop: layout.pixelSizeVertical(4),
  },
  cardBodyInnerContainer: {
    width: layout.widthPixel(340) - layout.widthPixel(60),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dateTimeContainer: {
    alignItems: "flex-end",
  },
  img: {
    width: layout.widthPixel(60),
    height: layout.heightPixel(60),
    borderRadius: layout.fontPixel(10),
  },
  scoreCommentContainer: {
    marginHorizontal: layout.pixelSizeHorizontal(10),
    justifyContent: "space-between",
  },
  iconRecordContainer: {
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  varId: {
    color: theme.primary,
    fontFamily: "Montserrat_600SemiBold",
    fontWeight: "600",
    fontSize: layout.fontPixel(14),
  },
  id: {
    fontFamily: "Montserrat_400Regular",
    fontWeight: "600",
    fontSize: layout.size.h5,
  },
  dateTime: {
    fontFamily: "Montserrat_400Regular",
    fontWeight: "600",
    fontSize: layout.size.h5,
  },
  score: {
    fontFamily: "Montserrat_500Medium",
    color: theme.text,
    fontSize: layout.size.h3,
  },
  scoreVar: {
    fontFamily: "Montserrat_500Medium",
    fontSize: layout.size.h4,
  },
  comment: {
    fontFamily: "Montserrat_400Regular",
    fontSize: layout.size.h5,
  },
  deleteContainer: {
    backgroundColor: theme.fadeBackground,
    paddingHorizontal: layout.pixelSizeHorizontal(17),
    borderWidth: 1,
    borderRadius: layout.fontPixel(3),
    borderColor: theme.text,
    paddingVertical: layout.pixelSizeVertical(2),
  },
  deleteText: {
    fontFamily: "Montserrat_400Regular",
    color: theme.text,
    fontSize: layout.fontPixel(13),
  },
  separator: {
    width: "100%",
    backgroundColor: "lightgrey",
    height: layout.heightPixel(0.7),
    marginVertical: layout.pixelSizeVertical(10),
  },
  detailContainer: {
    backgroundColor: "lightblue",
    paddingVertical: layout.pixelSizeVertical(4),
    paddingHorizontal: layout.pixelSizeHorizontal(13),
    borderRadius: layout.fontPixel(3),
  },
  detailText: {
    fontFamily: "Montserrat_500Medium",
    fontSize: layout.fontPixel(12),
    color: theme.primary,
  },
});
