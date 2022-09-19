import { View } from "react-native";
import React from "react";
import { useUserAuth } from "../context/firebaseContext/AuthContext";

import { SignInRequirements } from "../components/secondary";
import { Header } from "../components/primary";
import { RSHeader } from "../components/secondary";
import { useNavigation } from "@react-navigation/native";
import KeyBoardAvoidingWrapper from "../components/Keyboard/KeyBoardAvoidingWrapper";

export const SignIn = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false);

  // const { logIn } = useUserAuth();

  // const Header = () => {
  //   return <View style={styles.headerContainer} />;
  // };

  // const handleSubmit = async () => {
  //   setLoading(true);
  //   try {
  //     await logIn(email, password);
  //     navigation.replace("SideMenu");
  //     setEmail("");
  //     setPassword("");
  //     setError("");
  //     setLoading(false);
  //   } catch (error) {
  //     setError(error.message);
  //     setLoading(false);
  //   }
  // };

  // const Body = () => {
  //   return (
  //     <View style={[styles.bodyContainer, globalStyles.rowCenter]}>
  //       <View style={styles.bodyContentContainer}>
  //         <TouchableOpacity
  //           onPress={() => navigation.navigate("Register")}
  //           style={styles.AntDesign}
  //         >
  //           <AntDesign color="blue" size={24} name="left" />
  //         </TouchableOpacity>

  //         <Image
  //           style={styles.image}
  //           source={image.onboarding2}
  //         />

  //         <Text textStyle={[styles.text]} text="Welcome Back !" />
  //         <TextInput
  //           containerStyle={styles.inputContainer}
  //           edit={loading ? false : true}
  //           value={email}
  //           textInputStyle={styles.textInputStyle}
  //           onChangeText={(item) => setEmail(item)}
  //           placeholder="Email"
  //         />
  //         <TextInput
  //           containerStyle={styles.inputContainer}
  //           edit={loading ? false : true}
  //           value={password}
  //           textEntry={true}
  //           textInputStyle={styles.textInputStyle}
  //           onChangeText={(item) => setPassword(item)}
  //           placeholder="Password"
  //         />
  //         <Text textStyle={styles.errText} text={`${error && error}`}></Text>
  //         <View
  //           style={{
  //             alignSelf: "flex-start",
  //             flexDirection: "row",
  //           }}
  //         >
  //           <TouchableOpacity
  //             disabled={loading ? true : false}
  //             activeOpacity={0.6}
  //             style={{ alignSelf: "flex-start" }}
  //             onPress={() => navigation.navigate("RetrieveId")}
  //           >
  //             <Text textStyle={styles.textStyle} text="Forget Password?" />
  //           </TouchableOpacity>
  //           <TouchableOpacity
  //             disabled={loading ? true : false}
  //             activeOpacity={0.6}
  //             style={{ alignSelf: "flex-start", marginLeft: -14 }}
  //             onPress={() => navigation.navigate("Register")}
  //           >
  //             <Text textStyle={styles.textStyleRegister} text="Register" />
  //           </TouchableOpacity>
  //         </View>

  //         <Button
  //           containerStyle={styles.containerStyle}
  //           onPress={() => handleSubmit()}
  //           textStyle={styles.btnText}
  //           title={
  //             loading ? (
  //               <ActivityIndicator size="small" color="white" />
  //             ) : (
  //               "Sign In"
  //             )
  //           }
  //         />
  //       </View>
  //     </View>
  //   );
  // };

  const navigation = useNavigation();

  return (
    <KeyBoardAvoidingWrapper>
      <View>
        <Header
          onPress={() => navigation.goBack()}
          show
          iconName="chevron-back"
        />
        <RSHeader text="Welcome Back!" />
        <SignInRequirements />
      </View>
    </KeyBoardAvoidingWrapper>
  );
};
