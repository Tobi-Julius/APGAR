import { View } from "react-native";
import React, { useCallback, useMemo, useRef } from "react";
import { sendEmailVerification } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

import KeyBoardAvoidingWrapper from "../components/Keyboard/KeyBoardAvoidingWrapper";
import { useUserAuth } from "../context/firebaseContext/AuthContext";
import { auth } from "../firebase/firebase-config";
import { db } from "../firebase/firebase-config";
import { Header } from "../components/primary";
import { RSHeader, RegisterRequirement } from "../components/secondary";

export const Register = () => {
  // const [state, setState] = useState("");
  // const [city, setCity] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  // const [hospitalName, setHospitalName] = useState("");
  // const [inputFields, setInputFields] = useState(false);
  // const [loading, setLoading] = useState(false);

  // const { register } = useUserAuth();

  // const onSubmit = async () => {
  //   if (city === "" || state === "" || hospitalName === "") {
  //     setInputFields(true);
  //     return;
  //   } else {
  //     setLoading(true);
  //     try {
  //       await register(email, password);
  //       await setDoc(doc(db, `users/${auth.currentUser.uid}`), {
  //         state,
  //         email,
  //         city,
  //         hospitalName,
  //       });
  //       navigation.navigate("RegisterSucess");
  //       setState("");
  //       setCity("");
  //       setEmail("");
  //       setPassword("");
  //       setHospitalName("");
  //       setError("");
  //       setLoading(false);
  //       sendEmailVerification(auth.currentUser).then(() => {
  //         // Email verification sent!
  //         // ...
  //       });
  //     } catch (error) {
  //       setError(error.message);
  //       setLoading(false);
  //     }
  //   }
  // };

  // const Header = () => {
  //   return <View style={styles.headerContainer} />;
  // };
  // const InputFields = () => {
  //   return (
  //     <View
  //       style={{
  //         width: "90%",
  //         borderRadius: 10,
  //         marginTop: "3%",
  //         height: "80%",
  //       }}
  //     >
  //       <TextInput
  //         containerStyle={styles.textInputContainer}
  //         edit={loading ? false : true}
  //         value={hospitalName}
  //         placeholder="Hospital Name"
  //         onChangeText={(item) => setHospitalName(item)}
  //         textInputStyle={styles.TextInput}
  //       />
  //       <View
  //         style={{
  //           flexDirection: "row",
  //           width: "100%",
  //           justifyContent: "space-between",
  //           alignItems: "flex-end",
  //           height: "10%",
  //           marginBottom: "2.5%",
  //         }}
  //       >
  //         <View
  //           style={{
  //             width: "68%",
  //             borderWidth: 1,
  //             height: "80%",
  //             justifyContent: "center",
  //             borderColor: "lightgrey",
  //             borderRadius: 5,
  //           }}
  //         >
  //           <Picker
  //             enabled={loading ? false : true}
  //             selectedValue={state}
  //             dropdownIconColor={theme.primary}
  //             dropdownIconRippleColor={theme.primary}
  //             onValueChange={(item, index) => setState(item)}
  //             style={{
  //               color: theme.text,
  //               fontSize: 5,
  //               borderColor: "red",
  //               borderWidth: 1,
  //               height: "40%",
  //             }}
  //           >
  //             <Picker.Item label="state" enabled={false} value="state" />
  //             <Picker.Item label="Abia" value="Abia" />
  //             <Picker.Item label="FCT-Abuja" value="Abuja" />
  //             <Picker.Item label="Akwa Ibom" value="Akwa Ibom" />
  //             <Picker.Item label="Adamawa" value="Adamawa" />
  //             <Picker.Item label="Anambra" value="Anambra" />
  //             <Picker.Item label="Bauchi" value="Bauchi" />
  //             <Picker.Item label="Bayelsa" value="Bayelsa" />
  //             <Picker.Item label="Benue" value="Benue" />
  //             <Picker.Item label="Borno" value="Borno" />
  //             <Picker.Item label="Cross River" value="Cross River" />
  //             <Picker.Item label="Delta" value="Delta" />
  //             <Picker.Item label="Ebonyi" value="Ebonyi" />
  //             <Picker.Item label="Edo" value="Edo" />
  //             <Picker.Item label="Ekiti" value="Ekiti" />
  //             <Picker.Item label="Enugu" value="Enugu" />
  //             <Picker.Item label="Gombe" value="Gombe" />
  //             <Picker.Item label="Imo" value="Imo" />
  //             <Picker.Item label="Jigawa" value="Jigawa" />
  //             <Picker.Item label="Kaduna" value="Kaduna" />
  //             <Picker.Item label="Kano" value="Kano" />
  //             <Picker.Item label="Katsina" value="Katsina" />
  //             <Picker.Item label="Kebbi" value="Kebbi" />
  //             <Picker.Item label="Kogi" value="Kogi" />
  //             <Picker.Item label="Kwara" value="Kwara" />
  //             <Picker.Item label="Lagos" value="Lagos" />
  //             <Picker.Item label="Nasarawa" value="Nasarawa" />
  //             <Picker.Item label="Niger" value="Niger" />
  //             <Picker.Item label="Ogun" value="Ogun" />
  //             <Picker.Item label="Ondo" value="Ondo" />
  //             <Picker.Item label="Osun" value="Osun" />
  //             <Picker.Item label="Oyo" value="Oyo" />
  //             <Picker.Item label="Plateau" value="Plateau" />
  //             <Picker.Item label="Rivers" value="Rivers" />
  //             <Picker.Item label="Sokoto" value="Sokoto" />
  //             <Picker.Item label="Taraba" value="Taraba" />
  //             <Picker.Item label="Yobe" value="Yobe" />
  //             <Picker.Item label="Zamfara" value="Zamfara" />
  //           </Picker>
  //         </View>
  //         <TextInput
  //           containerStyle={{
  //             width: "28%",
  //           }}
  //           textInputStyle={{
  //             height: "80%",
  //             borderRadius: 5,
  //           }}
  //           edit={loading ? false : true}
  //           value={city}
  //           placeholder="City"
  //           onChangeText={(item) => setCity(item)}
  //         />
  //       </View>
  //       <TextInput
  //         edit={loading ? false : true}
  //         value={email}
  //         placeholder="Email"
  //         onChangeText={(item) => setEmail(item)}
  //         textInputStyle={styles.TextInput}
  //         containerStyle={styles.textInputContainer}
  //       />
  //       <TextInput
  //         edit={loading ? false : true}
  //         value={password}
  //         placeholder="Password"
  //         onChangeText={(item) => setPassword(item)}
  //         textInputStyle={styles.TextInput}
  //         textEntry={true}
  //         containerStyle={styles.textInputContainer}
  //       />
  //       {inputFields ? (
  //         <Text textStyle={styles.errText} text="Pls, Input all fields" />
  //       ) : null}
  //       <Text textStyle={styles.errText} text={`${error && error}`}></Text>

  //       <Button
  //         disabled={loading ? true : false}
  //         title={
  //           loading ? (
  //             <ActivityIndicator size="small" color="white" />
  //           ) : (
  //             "Register"
  //           )
  //         }
  //         onPress={() => onSubmit()}
  //         containerStyle={styles.btnContainer}
  //         textStyle={styles.btnText}
  //       />
  //       <View
  //         style={{
  //           flexDirection: "row",
  //           justifyContent: "center",
  //           marginTop: "2%",
  //         }}
  //       >
  //         <Text
  //           text="Registered ?"
  //           textStyle={[styles.register, globalStyles.Heading3]}
  //         />
  //         <TouchableOpacity
  //           activeOpacity={0.6}
  //           style={{ marginLeft: "3%" }}
  //           onPress={() => navigation.replace("SignIn")}
  //         >
  //           <Text
  //             textStyle={{ color: theme.primary, fontSize: 13 }}
  //             text="Sign In"
  //           />
  //         </TouchableOpacity>
  //       </View>
  //     </View>
  //   );
  // };
  // const Body = () => {
  //   return (
  //     <View style={[styles.bodyContainer, globalStyles.rowCenter]}>
  //       <View style={styles.bodyContentContainer}>
  //         <Image style={styles.image} source={image.onboarding2} />
  //         <Text textStyle={styles.text} text="Register your Hospital" />
  //         {InputFields()}
  //       </View>
  //     </View>
  //   );
  // };

  // ref
  const bottomSheetModalRef = useRef();

  // variables
  const snapPoints = useMemo(() => ["30%", "60%", "80%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <KeyBoardAvoidingWrapper>
      <View>
        <Header show={true} />
        <RSHeader text={"Register your Hospital"} />
        <RegisterRequirement />
      </View>
    </KeyBoardAvoidingWrapper>
  );
};
