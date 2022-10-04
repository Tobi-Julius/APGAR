import { View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { image, icon, theme } from "../../../constants";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "react-native";
import { Search } from "../../secondary";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const HomeHeader = ({ searchKeyword, setSearchKeyword }) => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.container}>
        <SafeAreaView>
          <View style={styles.innerContainer}>
            <View style={styles.headerContainer}>
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Image source={icon.open} style={styles.image} />
              </TouchableOpacity>

              <Image source={image.APGARlogo} style={styles.imageLogo} />
              <TouchableOpacity
                onPress={() => navigation.navigate("Notification")}
              >
                <Ionicons
                  name="notifications-outline"
                  color={theme.white}
                  size={27}
                />
              </TouchableOpacity>
            </View>
            <Search
              searchKeyword={searchKeyword}
              setSearchKeyword={setSearchKeyword}
            />
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
};
