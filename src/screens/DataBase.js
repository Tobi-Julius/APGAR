import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

import React, { useEffect, useState, useCallback } from "react";
import { AntDesign } from "@expo/vector-icons";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { Picker } from "@react-native-picker/picker";

import { Themes } from "../constants";
import { Text, TextBold } from "../components/common";
import { globalStyles } from "../styles";
import { db, auth } from "../firebase/firebase-config";

const DataBase = ({ navigation }) => {
  const [patientValue, setPatientValue] = useState([]);
  const [picker, setPicker] = useState("");

  const getData = useCallback(async () => {
    const q = query(
      collection(db, `users/${auth.currentUser.uid}/user`),
      orderBy(picker ? picker : "createdAt", "desc")
    );
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setPatientValue(data);
  }, [patientValue]);

  useEffect(() => {
    getData();
  }, [getData]);

  const Header = () => {
    return <View style={styles.headerContainer} />;
  };

  const Body = () => {
    return (
      <View style={[styles.bodyContainer, globalStyles.rowCenter]}>
        <View style={styles.bodyContentContainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              marginTop: 13,
              marginBottom: 13,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.left}
            >
              <AntDesign color="blue" size={28} name="left" />
            </TouchableOpacity>
            <View style={styles.paramsContainer}>
              <TextBold text="Database" textStyle={[styles.parameters1]} />
            </View>
            <View
              style={{
                // borderWidth: 1,
                borderRadius: 5,
                borderColor: "lightgrey",
                marginTop: 5,
                marginLeft: 8,
                height: 15,
                justifyContent: "center",
                width: "10%",
              }}
            >
              <Picker
                selectedValue={picker}
                mode={"dropdown"}
                dropdownIconColor={Themes.primary}
                dropdownIconRippleColor={Themes.primary}
                fontFamily="Montserrat"
                onValueChange={(item, index) => {
                  setPicker(item);
                }}
                // style={{
                //   borderColor: "red",
                //   borderWidth: 1,
                //   color: Themes.text,
                //   borderRadius: 5,
                // }}
              >
                <Picker.Item
                  label="Sort By"
                  color={Themes.text}
                  enabled={true}
                  value="Sort By"
                />
                <Picker.Item label="Time" value="createdAt" />
                <Picker.Item label="Score" value="score" />
              </Picker>
            </View>
          </View>
          {patientValue < 1 ? (
            <TextBold
              style={{
                color: Themes.secondary,
              }}
              text="EXPLORE OUR APP"
            />
          ) : (
            <FlatList
              data={patientValue}
              renderItem={Data}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => item.id}
            />
          )}
        </View>
      </View>
    );
  };

  const Data = ({ item, index }) => {
    return (
      <View style={styles.cardContainer}>
        <View>
          <View
            style={{
              flexDirection: "row",
              marginBottom: 10,
              marginTop: 5,
              justifyContent: "space-between",
            }}
          >
            <View>
              <TextBold text={item.motherId} textStyle={styles.idNumber} />
              <Text textStyle={{ fontSize: 10 }} text="ID" />
            </View>

            <View>
              <View
                style={{
                  flexDirection: "row",
                  marginLeft: 5,
                  alignSelf: "flex-end",
                }}
              >
                <Text
                  textStyle={{ fontSize: 10 }}
                  text={` ${
                    item.createdAt === null
                      ? ""
                      : item.createdAt.toDate().getDay()
                  }/`}
                />
                <Text
                  textStyle={{ fontSize: 10 }}
                  text={`${
                    item.createdAt === null
                      ? ""
                      : item.createdAt.toDate().getMonth()
                  }/`}
                />
                <Text
                  textStyle={{ fontSize: 10 }}
                  text={
                    item.createdAt === null
                      ? ""
                      : item.createdAt.toDate().getFullYear()
                  }
                />
              </View>
              <Text
                textStyle={{ fontSize: 10 }}
                text={
                  item.createdAt === null
                    ? ""
                    : item.createdAt.toDate().toTimeString()
                }
              />
            </View>
          </View>
          <View style={styles.separator} />

          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignSelf: "flex-end",
                  width: "41%",
                }}
              >
                <View>
                  <Image
                    source={{ uri: item.image }}
                    style={{
                      width: 60,
                      height: 60,
                      marginRight: 5,
                      resizeMode: "cover",
                      borderRadius: 10,
                    }}
                  />
                </View>
                <View>
                  <Text textStyle={{ fontSize: 10 }} text="Score" />
                  <Text
                    text={item.score}
                    textStyle={{
                      color: Themes.primary,
                      marginTop: 5,
                      fontSize: 10,
                    }}
                  />
                  <Text
                    text={item.comment}
                    textStyle={{
                      color: Themes.primary,
                      marginTop: 5,
                      fontSize: 10,
                    }}
                  />
                </View>
              </View>

              {item.deliveryMode !== undefined ||
              item.birthWeight !== undefined ||
              item.fetalPosition !== undefined ||
              item.gestationPeriod !== undefined ||
              item.maternalHtpertension !== undefined ||
              item.motherID !== undefined ||
              item.MSL !== undefined ? (
                <View>
                  <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() =>
                      navigation.navigate("Delete", { id: item.id })
                    }
                    style={styles.deleteBtnContainer}
                  >
                    <Text textStyle={styles.deleteBtnText} text="Delete" />
                  </TouchableOpacity>

                  <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() =>
                      navigation.navigate("Detail", {
                        id: item.id,
                      })
                    }
                    containerStyle={styles.detailBtnContainer}
                  >
                    <Text textStyle={styles.detailBtnText} text="Detail" />
                  </TouchableOpacity>
                </View>
              ) : (
                <View>
                  <View>
                    <TouchableOpacity
                      activeOpacity={0.6}
                      onPress={() =>
                        navigation.navigate("Delete", { id: item.id })
                      }
                      style={styles.deleteBtnContainer}
                    >
                      <Text textStyle={styles.deleteBtnText} text="Delete" />
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() =>
                      navigation.navigate("MaternalRecord", {
                        id: item.id,
                        motherId: item.motherId,
                      })
                    }
                  >
                    <Text
                      textStyle={styles.maternalText}
                      text="Add Maternal Record"
                    />
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      {Header()}
      {Body()}
    </View>
  );
};

export default DataBase;

const styles = StyleSheet.create({
  headerContainer: {
    height: Dimensions.get("window").height * 0.2,
    backgroundColor: Themes.primary,
    justifyContent: "center",
  },
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  menuStyle: {
    width: 18,
    height: 18,
  },
  bodyContainer: {
    top: "-12%",
    overflow: "hidden",
  },
  bodyContentContainer: {
    backgroundColor: "#fff",
    width: Dimensions.get("window").width * 0.95,
    height: Dimensions.get("screen").height * 0.815,
    borderRadius: 10,
    alignItems: "center",
  },
  paramsContainer: {
    flexDirection: "row",
    margiTop: "2%",
  },
  left: {},
  parameters1: {
    fontSize: 18,
    color: Themes.primary,
    marginTop: "1%",
  },
  idNumber: {
    color: Themes.primary,
    fontSize: 14,
  },
  deleteBtnContainer: {
    borderWidth: 1,
    borderColor: "lightgray",
    marginBottom: 5,
    borderRadius: 4,
  },
  deleteBtnText: {
    padding: 5,
    textAlign: "center",
    fontSize: 10,
    color: Themes.secondary,
  },
  detailBtnContainer: {
    borderRadius: 7,
  },
  detailBtnText: {
    padding: 5,
    fontWeight: "900",
    color: Themes.primary,
    backgroundColor: "#f5f6ff",
    textAlign: "center",
    fontSize: 10,
  },
  separator: {
    backgroundColor: "lightgray",
    width: "100%",
    height: 1,
    marginBottom: "3%",
  },
  cardContainer: {
    padding: 9,
    borderRadius: 5,
    marginBottom: "2%",
    shadowColor: "lightgray",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.65,
    elevation: 5,
  },
  maternalText: {
    textDecorationLine: "underline",
    color: Themes.secondary,
    fontSize: 10,
    marginTop: 5,
  },
  modal: {
    height: 47,
    width: 82,
    backgroundColor: "lightblue",
    position: "absolute",
    right: "18%",
    top: -7,
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 5,
    zIndex: 2,
  },
  deleteBtnTextModal: {
    color: Themes.secondary,
    width: "100%",
    padding: 2,
  },
  emptyData: {
    marginTop: 25,
    color: Themes.secondary,
  },
});
