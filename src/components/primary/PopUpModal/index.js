import { View, TouchableOpacity, Modal } from "react-native";
import React from "react";
import { Text } from "../../common";
import { styles } from "./styles";

export const PopUpModal = ({ others, setOthers }) => {
  return (
    <View>
      <Modal
        visible={others.modal}
        animationType="fade"
        transparent
        onRequestClose={() => {
          setOthers({
            ...others,
            modal: false,
          });
        }}
      >
        <View style={styles.centered_view}>
          <View style={styles.warning_modal}>
            <View style={styles.warningHeaderContainer}>
              <Text textStyle={styles.warningHeaderText} text="Warning" />
            </View>
            <View style={styles.bodyContent}>
              <Text
                textStyle={styles.warningText}
                text="Please, Fill all the Fields to Calculate Your Score"
              />
            </View>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => setOthers({ ...others, modal: false })}
              style={styles.modalBtnContainer}
            >
              <Text textStyle={styles.modalBtnText} text="Close" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
