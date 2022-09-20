import { View, TouchableOpacity } from "react-native";
import React from "react";
import { Button, Text, TextInput } from "../../common";
import { globalStyles } from "../../../styles";
import { styles } from "./styles";

export const SignInRequirements = ({ value, setValue, handleSubmit }) => {
  return (
    <View style={[globalStyles.rowCenter]}>
      <View style={styles.container}>
        <TextInput
          value={value.email}
          containerStyle={styles.inputContainer}
          textInputStyle={styles.inputStyle}
          placeholder="Email"
          onChangeText={(text) => {
            setValue({
              ...value,
              email: text,
            });
          }}
        />
        <TextInput
          value={value.password}
          containerStyle={styles.inputContainer}
          textInputStyle={styles.inputStyle}
          placeholderTextColor="red"
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => {
            setValue({
              ...value,
              password: text,
            });
          }}
        />
        <Text textStyle={styles.error} text={value.error && value.error} />
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
          onPress={() => handleSubmit()}
          title="Sign In"
          textStyle={styles.btnText}
          containerStyle={styles.btnContainer}
        />
      </View>
    </View>
  );
};
