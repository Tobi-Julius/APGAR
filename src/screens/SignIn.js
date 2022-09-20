import { View } from "react-native";
import React, { useState } from "react";
import { useUserAuth } from "../context/firebaseContext/AuthContext";
import { SignInRequirements } from "../components/secondary";
import { Header } from "../components/primary";
import { RSHeader } from "../components/secondary";
import { useNavigation } from "@react-navigation/native";
import KeyBoardAvoidingWrapper from "../components/Keyboard/KeyBoardAvoidingWrapper";

export const SignIn = () => {
  const navigation = useNavigation();

  const [value, setValue] = useState({
    email: "",
    password: "",
    loading: "",
    error: "",
  });

  const { logIn } = useUserAuth();

  const handleSubmit = async () => {
    setValue({
      ...value,
      loading: true,
    });
    try {
      await logIn(value.email, value.password);
      setValue({
        loading: false,
        error: "",
        password: "",
        email: "",
      });
      navigation.replace("RootNavigation");
    } catch (error) {
      setValue({
        ...value,
        loading: false,
        error: error.message,
      });
    }
  };

  return (
    <KeyBoardAvoidingWrapper>
      <View>
        <Header
          onPress={() => navigation.goBack()}
          show
          iconName="chevron-back"
        />
        <RSHeader text="Welcome Back!" />
        <SignInRequirements
          handleSubmit={handleSubmit}
          value={value}
          setValue={setValue}
        />
      </View>
    </KeyBoardAvoidingWrapper>
  );
};
