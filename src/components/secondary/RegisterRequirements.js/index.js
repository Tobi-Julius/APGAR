import { TouchableOpacity, View, ActivityIndicator } from "react-native";
import React, { useCallback, useMemo } from "react";
import { TextInput, Picker, Button, Text } from "../../common";
import { styles } from "./styles";
import { globalStyles } from "../../../styles";
import { useNavigation } from "@react-navigation/native";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

export const RegisterRequirement = ({
  value,
  setValue,
  handleSubmit,
  loading,
  bottomSheetModalRef,
}) => {
  const navigation = useNavigation();

  const snapPoints = useMemo(() => ["25%", "55%", "65%"], []);

  const dismiss = useCallback(() => {
    bottomSheetModalRef.current.dismiss();
  }, []);

  return (
    <BottomSheetModalProvider>
      <View style={[styles.wrapper, globalStyles.rowCenter]}>
        <View style={styles.container}>
          <TextInput
            value={value.hospitalName}
            disabled={loading ? true : false}
            onChangeText={(text) => {
              setValue({ ...value, hospitalName: text });
            }}
            placeholder="Hospital name"
            containerStyle={styles.inputContainer}
            textInputStyle={styles.inputStyle}
          />
          <Picker pick={value} loading={loading} setPick={setValue} />
          <TextInput
            value={value.city}
            disabled={loading ? true : false}
            onChangeText={(text) => {
              setValue({ ...value, city: text });
            }}
            placeholder="City"
            containerStyle={styles.inputContainer}
            textInputStyle={styles.inputStyle}
          />
          <TextInput
            value={value.email}
            disabled={loading ? true : false}
            onChangeText={(text) => {
              setValue({ ...value, email: text });
            }}
            placeholder="Email"
            containerStyle={styles.inputContainer}
            textInputStyle={styles.inputStyle}
          />
          <TextInput
            value={value.password}
            disabled={loading ? true : false}
            onChangeText={(text) => {
              setValue({ ...value, password: text });
            }}
            secureTextEntry
            placeholder="Password"
            containerStyle={styles.inputContainer}
            textInputStyle={styles.inputStyle}
          />
          <Text textStyle={styles.error} text={value.error && value.error} />
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
            title={
              loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                "Register"
              )
            }
            onPress={() => {
              handleSubmit();
            }}
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
                    text={`${value.email} your hospital has been registered sucessfully`}
                  />
                  <Text
                    textStyle={styles.email}
                    text="Check inbox or spam for verification"
                  />
                  <Text textStyle={styles.keepSafe} text={`${value.email}`} />
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
