import { View, TouchableOpacity } from "react-native";
import React from "react";
import { Button, Text, TextInput } from "../../common";
import { globalStyles } from "../../../styles";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export const SignInRequirements = () => {
  const navigation = useNavigation();

  return (
    <View style={[globalStyles.rowCenter]}>
      <View style={styles.container}>
        <TextInput
          containerStyle={styles.inputContainer}
          textInputStyle={styles.inputStyle}
          placeholder="Email"
        />
        <TextInput
          containerStyle={styles.inputContainer}
          textInputStyle={styles.inputStyle}
          placeholderTextColor="red"
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("RetrieveId")}
          activeOpacity={0.6}
        >
          <Text textStyle={styles.forgetPassword} text="Forgot Password ?" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Register")}
          activeOpacity={0.6}
        >
          <Text textStyle={styles.register} text="Register" />
        </TouchableOpacity>
        <Button
          onPress={() => navigation.navigate("RootNavigation")}
          title="Sign In"
          textStyle={styles.btnText}
          containerStyle={styles.btnContainer}
        />
      </View>
    </View>
  );
};
