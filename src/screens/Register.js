import { View } from "react-native";
import React, { useState, useRef, useCallback } from "react";
import { sendEmailVerification } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import KeyBoardAvoidingWrapper from "../components/Keyboard/KeyBoardAvoidingWrapper";
import { useUserAuth } from "../context/firebaseContext/AuthContext";
import { auth } from "../firebase/firebase-config";
import { db } from "../firebase/firebase-config";
import { Header } from "../components/primary";
import { RSHeader, RegisterRequirement } from "../components/secondary";

export const Register = () => {
  const [value, setValue] = useState({
    hospitalName: "",
    state: "",
    city: "",
    email: "",
    password: "",
    error: "",
  });
  const [loading, setLoading] = useState(false);

  const bottomSheetModalRef = useRef();

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const { register } = useUserAuth();
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const passwordReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const handleSubmit = async () => {
    const { city, email, hospitalName, password, state } = value;
    if (reg.test(value.email) !== true) {
      setValue({ ...value, email: "", error: "Enter valid email" });
      return;
    } else if (passwordReg.test(value.password) !== true) {
      setValue({
        ...value,
        error:
          "Password Must contain 8 character with at least 1 number and 1 alphabet",
      });
      return;
    } else if (
      value.hospitalName.length < 2 ||
      value.city.length < 2 ||
      value.state === ""
    ) {
      setValue({
        ...value,
        error:
          "Hospital Name and city value must be greater than 2, select your state",
      });
      return;
    } else {
      setLoading(true);
      try {
        await register(value.email, value.password);
        await setDoc(doc(db, `users/${auth.currentUser.uid}`), {
          state,
          email,
          city,
          password,
          hospitalName,
        })
          .then((res) => {
            setValue({
              ...value,
              state: "",
              city: "",
              password: "",
              error: "",
              hospitalName: "",
            });
            handlePresentModalPress();
            setLoading(false);
            sendEmailVerification(auth.currentUser).then(() => {
              // Email verification sent!
              // ...
            });
          })
          .catch((error) => {
            setValue({ ...value, error: error.message });
            setLoading(false);
          });
      } catch (error) {
        setValue({
          ...value,
          error: error.message,
        });
        setLoading(false);
      }
    }
  };

  return (
    <KeyBoardAvoidingWrapper>
      <View>
        <Header show={true} />
        <RSHeader text={"Register your Hospital"} />
        <RegisterRequirement
          handleSubmit={handleSubmit}
          value={value}
          setValue={setValue}
          loading={loading}
          bottomSheetModalRef={bottomSheetModalRef}
        />
      </View>
    </KeyBoardAvoidingWrapper>
  );
};
