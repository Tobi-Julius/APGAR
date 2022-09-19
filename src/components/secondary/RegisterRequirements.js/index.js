import { TouchableOpacity, View, StyleSheet } from "react-native";
import React, { useCallback, useMemo, useRef } from "react";
import { TextInput, Picker, Button, Text } from "../../common";
import { styles } from "./styles";
import { globalStyles } from "../../../styles";
import { useNavigation } from "@react-navigation/native";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

export const RegisterRequirement = () => {
  const navigation = useNavigation();

  const bottomSheetModalRef = useRef();

  // variables
  const snapPoints = useMemo(() => ["25%", "55%", "65%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const dismiss = useCallback(() => {
    bottomSheetModalRef.current.dismiss();
  }, []);

  return (
    <BottomSheetModalProvider>
      <View style={[styles.wrapper, globalStyles.rowCenter]}>
        <View style={styles.container}>
          <TextInput
            placeholder="Hospital name"
            containerStyle={styles.inputContainer}
            textInputStyle={styles.inputStyle}
          />
          <Picker />
          <TextInput
            placeholder="City"
            containerStyle={styles.inputContainer}
            textInputStyle={styles.inputStyle}
          />
          <TextInput
            placeholder="Email"
            containerStyle={styles.inputContainer}
            textInputStyle={styles.inputStyle}
          />
          <TextInput
            placeholder="Password"
            containerStyle={styles.inputContainer}
            textInputStyle={styles.inputStyle}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SignIn");
            }}
            activeOpacity={0.6}
          >
            <Text text="Sign In" textStyle={styles.signin} />
          </TouchableOpacity>
          <Button
            containerStyle={styles.btnContainer}
            textStyle={styles.btnText}
            title="Register"
            onPress={() => handlePresentModalPress()}
          />
          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
            }}
          >
            <BottomSheetModal
              ref={bottomSheetModalRef}
              index={1}
              snapPoints={snapPoints}
              backgroundStyle="bottom"
              handleStyle={styles.handleStyle}
            >
              <View style={styles.bottomSheetContainer}>
                <View style={styles.contentContainer}>
                  <Text textStyle={styles.sucess} text="Sucess!" />
                  <Text
                    textStyle={styles.welcomeText}
                    text="Hello, Jacobs Clinic your hospital has been registered sucessfully"
                  />
                  <Text textStyle={styles.email} text="@Email" />
                  <Text
                    textStyle={styles.keepSafe}
                    text="Keep your password safe"
                  />
                  <Button
                    onPress={() => {
                      navigation.navigate("SignIn");
                      dismiss();
                    }}
                    containerStyle={styles.modalBtnContainer}
                    textStyle={styles.modalBtnText}
                    title="Continue"
                  />
                </View>
              </View>
            </BottomSheetModal>
          </View>
        </View>
      </View>
    </BottomSheetModalProvider>
  );
};
