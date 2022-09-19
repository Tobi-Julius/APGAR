import { StyleSheet } from "react-native";
import { layout } from "../../../utils";

export const styles = StyleSheet.create({
  container: {
    height: layout.heightPixel(150),
    width: layout.widthPixel(70),
    borderWidth: 1,
    borderColor: "red",
    marginTop: layout.pixelSizeVertical(5),
  },
});
