import { View, StyleSheet } from "react-native";
import React, { useRef, useCallback, useMemo } from "react";
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

  // const [email, setEmail] = useState("");
  // const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false);

  // const Header = () => {
  //   return <View style={styles.headerContainer} />;
  // };

  // const Body = () => {
  //   return (
  //     <View style={[styles.bodyContainer, globalStyles.rowCenter]}>
  //       <View style={styles.bodyContentContainer}>
  //         <TouchableOpacity
  //           onPress={() => navigation.navigate("SignIn")}
  //           style={styles.AntDesign}
  //         >
  //           <AntDesign color={theme.primary} size={28} name="left" />
  //         </TouchableOpacity>
  //         <Text
  //           text="Retrieve Password"
  //           textStyle={[globalStyles.Heading1, styles.textStyle]}
  //         />

  //         <View style={styles.container}>
  //           <TextInput
  //             edit={loading ? false : true}
  //             textInputStyle={{ fontSize: 12, borderRadius: 5, padding: 8 }}
  //             placeholder="Email"
  //             onChangeText={(item) => {
  //               setEmail(item);
  //             }}
  //           />
  //           <View>
  //             <Text textStyle={styles.errText} text={`${error && error}`} />

  //             <TouchableOpacity
  //               disabled={loading ? true : false}
  //               activeOpacity={0.6}
  //               style={{
  //                 marginTop: "3%",
  //               }}
  //               onPress={() => {
  //                 navigation.navigate("SignIn");
  //               }}
  //             >
  //               <Text textStyle={styles.signInText} text={"Sign in"} />
  //             </TouchableOpacity>
  //             <Button
  //               onPress={async () => {
  //                 setLoading(true);
  //                 try {
  //                   await sendPasswordResetEmail(auth, email);
  //                   setEmail("");
  //                   setError("");
  //                   setLoading(false);
  //                   navigation.navigate("Recovery");
  //                 } catch (error) {
  //                   setError(error.message);
  //                   setLoading(false);
  //                 }
  //               }}
  //               textStyle={styles.btnText}
  //               containerStyle={styles.containerStyle}
  //               title={
  //                 loading ? (
  //                   <ActivityIndicator color="white" size="small" />
  //                 ) : (
  //                   "Retrieve Passsword"
  //                 )
  //               }
  //             />
  //           </View>
  //         </View>
  //       </View>
  //     </View>
  //   );
  // };

  const navigation = useNavigation();

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
            <TextInput placeholder="Email" />
            <TouchableOpacity
              style={{
                marginTop: layout.pixelSizeVertical(15),
              }}
              activeOpacity={0.6}
              onPress={() => navigation.navigate("SignIn")}
            >
              <Text
                textStyle={{
                  fontFamily: "Montserrat_400Regular",
                  textDecorationLine: "underline",
                  color: theme.primary,
                  fontSize: layout.size.h4,
                }}
                text="Sign In"
              />
            </TouchableOpacity>
            <Button
              onPress={() => handlePresentModalPress()}
              containerStyle={{
                marginVertical: layout.pixelSizeVertical(40),
                borderRadius: layout.fontPixel(30),
              }}
              textStyle={{
                color: theme.white,
                fontFamily: "Montserrat_600SemiBold",
                fontSize: layout.size.h3,
                paddingVertical: layout.pixelSizeVertical(20),
              }}
              title={"Retrieve Password"}
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
                    onPress={() => navigation.navigate("SignIn")}
                    containerStyle={{
                      marginVertical: layout.pixelSizeVertical(50),
                      borderRadius: layout.fontPixel(10),
                    }}
                    textStyle={{
                      fontFamily: "Montserrat_600SemiBold",
                      fontSize: layout.size.h4,
                      color: theme.white,
                      paddingVertical: layout.pixelSizeVertical(18),
                      paddingHorizontal: layout.pixelSizeHorizontal(50),
                    }}
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
});
