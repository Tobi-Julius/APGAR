import { View, ScrollView } from "react-native";
import React from "react";
import { styles } from "./styles";
import { Text } from "../../common";

export const DatabaseCard = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <View>
          <View>
            <Text text="ID" />
            <Text text="ID" />
          </View>

          <View>
            <Text text="Date" />
            <Text text="Time" />
          </View>
        </View>

        <View>
          {/* image */}
          <View>
            <View>
              <Text text="score" />
              <Text text="score" />
              <Text text="comment" />
            </View>
            <View>
              <Text text="icon" />
              <Text text="recordAdd" />
              <Text text="recordAdd" />
              <Text text="recordAdd" />
              <Text text="recordAdd" />
              <Text text="recordAdd" />
              <Text text="recordAdd" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
