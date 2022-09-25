import { View } from "react-native";
import React, { useMemo, useCallback, useState } from "react";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { Text } from "../../components/common";
import { globalStyles } from "../../styles";
import { styles } from "./styles";
import { layout } from "../../utils";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../constants";
import { useUserAuth } from "../../context/firebaseContext/AuthContext";
import { ActivityIndicator } from "react-native";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";

export const DeleteUser = ({ bottomSheetModalRef, id }) => {
  const [value, setValue] = useState({
    loading: false,
    error: "",
  });
  const { user } = useUserAuth();
  const snapPoints = useMemo(
    () => [layout.heightPixel(270), layout.fontPixel(370)],
    []
  );

  const dismiss = useCallback(() => {
    bottomSheetModalRef.current.dismiss();
  }, []);

  const deleteHandler = async () => {
    setValue({ ...value, loading: true, error: "" });
    try {
      await deleteDoc(doc(db, `users/${user.uid}/user`, id));
      setValue({ ...value, loading: false, error: "" });

      dismiss();
    } catch (error) {
      setValue({ ...value, loading: false, error: error.message });

      setLoading(false);
    }
  };

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        backgroundStyle="bottom"
        // handleStyle={styles.handleStyle}
      >
        <View style={[globalStyles.rowCenter]}>
          <View style={[styles.container]}>
            <View style={styles.modalHeader}>
              <Text textStyle={styles.deleteUser} text="Delete User" />
              <Text textStyle={styles.id} text={`ID: ${id.slice(0, 4)}`} />
            </View>
            {value.loading ? (
              <ActivityIndicator color={theme.primary} size={24} />
            ) : (
              <View>
                <TouchableOpacity
                  onPress={() => deleteHandler()}
                  activeOpacity={0.6}
                  style={[styles.deleteContainer, globalStyles.rowCenter]}
                >
                  <Text textStyle={styles.deleteText} text="Confirm Delete" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => dismiss()}
                  activeOpacity={0.6}
                  style={[styles.dismissContainer, globalStyles.rowCenter]}
                >
                  <Text textStyle={styles.dismissText} text="Dismiss" />
                </TouchableOpacity>
              </View>
            )}
            <View style={styles.userDeleteContainer}>
              <Ionicons
                name="warning-outline"
                color={theme.secondary}
                size={22}
              />
              <Text
                textStyle={styles.userDelete}
                text="User deleted can not be retrieved"
              />
              <Text
                textStyle={styles.error}
                text={value.error && value.error}
              />
            </View>
          </View>
        </View>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};
