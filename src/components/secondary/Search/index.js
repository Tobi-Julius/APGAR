import { View } from "react-native";
import React from "react";
import { Searchbar } from "react-native-paper";
import { styles } from "./styles";
import { theme } from "../../../constants";
import { layout } from "../../../utils";

export const Search = ({ setSearchKeyword, searchKeyword }) => {
  return (
    <View>
      <Searchbar
        keyboardType={"number-pad"}
        onChangeText={(text) => setSearchKeyword(text)}
        value={searchKeyword}
        placeholder="Search Score"
        placeholderTextColor={theme.text}
        iconColor={theme.primary}
        textAlign="center"
        inputStyle={{
          fontFamily: "Montserrat_500Medium",
          fontSize: layout.size.h4,
          color: theme.text,
        }}
        elevation={4}
        style={styles.searchContainer}
      />
    </View>
  );
};
