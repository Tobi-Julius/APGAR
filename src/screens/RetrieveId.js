import { View, StyleSheet, ActivityIndicator } from "react-native";
import React, { useRef, useCallback, useMemo, useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebase-config";
import { theme } from "../constants";
import { globalStyles } from "../styles";
import { Button, TextInput, Text } from "../components/common";
import { Header } from "../components/primary";
import { useNavigation } from "@react-navigation/native";
import { layout } from "../utils";
import { TouchableOpacity } from "react-native";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

export const RetrieveId = () => {
  const [value, setValue] = useState({
    email: "",
    loading: false,
    error: "",
  });

  const navigation = useNavigation();

  const bottomSheetModalRef = useRef();
  // variables
  const snapPoints = useMemo(() => ["20%", "40%"], []);
  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const dismiss = useCallback(() => {
    bottomSheetModalRef.current.dismiss();
  }, []);

  const RetrieveIdHandler = async () => {
    setValue({
      ...value,
      loading: true,
    });
    try {
      await sendPasswordResetEmail(auth, email);
      setValue({ ...value, loading: false, error: "" });
      handlePresentModalPress();
    } catch (error) {
      setValue({
        ...value,
        error: error.message,
        loading: false,
      });
    }
  };
  return (
    <BottomSheetModalProvider>
      <View style={globalStyles.container}>
        <Header
          text="Retrieve Password"
          show
          onPress={() => navigation.goBack()}
          iconName="chevron-back"
        />
        <View
          style={[
            globalStyles.rowCenter,
            { marginTop: layout.pixelSizeVertical(80) },
          ]}
        >
          <View style={{ width: layout.widthPixel(340) }}>
            <TextInput
              value={value.email}
              disabled={value.loading ? true : false}
              onChangeText={(text) => {
                setValue({ ...value, email: text });
              }}
              containerStyle={styles.inputContainer}
              textInputStyle={styles.inputStyle}
              placeholder="Email"
            />
            <Text textStyle={styles.error} text={value.error && value.error} />
            <TouchableOpacity
              style={{
                marginTop: layout.pixelSizeVertical(15),
              }}
              activeOpacity={0.6}
              onPress={() => navigation.navigate("SignIn")}
            >
              <Text textStyle={styles.signIn} text="Sign In" />
            </TouchableOpacity>

            <Button
              disabled={value.loading ? true : false}
              onPress={() => RetrieveIdHandler()}
              containerStyle={styles.btnContainer}
              textStyle={styles.btnText}
              title={
                value.loading ? (
                  <ActivityIndicator color={theme.white} size="small" />
                ) : (
                  "Retrieve Password"
                )
              }
            />
            <BottomSheetModal
              ref={bottomSheetModalRef}
              index={1}
              snapPoints={snapPoints}
              backgroundStyle="bottom"
              handleStyle={styles.handleStyle}
            >
              <View style={styles.bottomSheetContainer}>
                <View style={styles.wrapper}>
                  <Text
                    textStyle={styles.headerText}
                    text="Password Recovery"
                  />
                  <Text
                    textStyle={styles.content}
                    text="Your password reset link has been sent to the email provided"
                  />
                  <Button
                    onPress={() => {
                      navigation.navigate("SignIn");
                      dismiss();
                    }}
                    containerStyle={styles.modalTextStyle}
                    textStyle={styles.modalBtnStyle}
                    title="Sign In"
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

const styles = StyleSheet.create({
  bottomSheetContainer: {
    backgroundColor: "#fcfcfc",
    flex: 1,
    backgroundColor: "#fcfcfc",
    flex: 1,
    padding: layout.pixelSizeHorizontal(20),
    alignItems: "center",
  },
  handleStyle: {
    backgroundColor: theme.primary,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  wrapper: {
    width: layout.widthPixel(200),
    alignItems: "center",
  },
  headerText: {
    color: theme.primary,
    fontSize: layout.size.h2,
    fontFamily: "Montserrat_600SemiBold",
    marginBottom: layout.pixelSizeVertical(65),
    textAlign: "center",
  },
  content: {
    color: theme.primary,
    fontSize: layout.size.h4,
    fontFamily: "Montserrat_400Regular",
    marginBottom: layout.pixelSizeVertical(65),
    textAlign: "center",
  },
  inputStyle: {
    fontFamily: "Montserrat_500Medium",
  },
  inputContainer: {
    marginBottom: layout.pixelSizeVertical(10),
    fontFamily: "Montserrat_500Medium",
  },
  signIn: {
    fontFamily: "Montserrat_400Regular",
    textDecorationLine: "underline",
    color: theme.primary,
    fontSize: layout.size.h4,
  },
  btnContainer: {
    marginVertical: layout.pixelSizeVertical(40),
    borderRadius: layout.fontPixel(30),
  },
  btnText: {
    color: theme.white,
    fontFamily: "Montserrat_600SemiBold",
    fontSize: layout.size.h3,
    paddingVertical: layout.pixelSizeVertical(20),
  },
  modalBtnStyle: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: layout.size.h4,
    color: theme.white,
    paddingVertical: layout.pixelSizeVertical(18),
    paddingHorizontal: layout.pixelSizeHorizontal(50),
  },
  modalTextStyle: {
    marginVertical: layout.pixelSizeVertical(50),
    borderRadius: layout.fontPixel(10),
  },
  error: {
    color: theme.secondary,
    fontFamily: "Montserrat_400Regular",
    fontSize: layout.size.h5,
  },
});
