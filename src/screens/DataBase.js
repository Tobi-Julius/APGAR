import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

import React, { useContext, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

import { GlobalContext } from "../context/GlobalState";
import { Themes } from "../constants";
import { Text } from "../components/common";
import { globalStyles } from "../styles";
import FadeAnim from "../components/Animated/FadeAnim";

const DataBase = ({ navigation, route }) => {
  const [modal, setModal] = useState(false);
  const { users } = useContext(GlobalContext);
  const { id } = route.params;

  const data = users.find((item) => {
    return item.id === id;
  });

  const Header = () => {
    return <View style={styles.headerContainer} />;
  };

  const Body = () => {
    return (
      <View style={[styles.bodyContainer, globalStyles.rowCenter]}>
        <View style={styles.bodyContentContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.left}
          >
            <AntDesign color="blue" size={28} name="left" />
          </TouchableOpacity>
          <View style={styles.paramsContainer}>
            <Text text="Database" textStyle={[styles.parameters1]} />
          </View>
          <FlatList
            data={users}
            renderItem={Data}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    );
  };

  const Data = ({ item, index }) => {
    return (
      <View key={item.id} style={styles.cardContainer}>
        <View>
          <View
            style={{
              flexDirection: "row",
              marginBottom: 10,
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text
                text={`${item.id >= 10 ? item.id : `0${item.id}`}`}
                textStyle={styles.idNumber}
              />
              <Text text="ID" />
            </View>

            <View>
              <Text text="Year" />
              <Text text="Time" />
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
              <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
                <View>
                  <Image
                    source={require("../images//Home/baby1.png")}
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
                  <Text text="Score" />
                  <Text
                    text={item.score}
                    textStyle={{ color: Themes.primary, marginTop: 5 }}
                  />
                  <Text
                    text={item.comment}
                    textStyle={{ color: Themes.primary, marginTop: 5 }}
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
                      navigation.navigate("Detail", { id: item.id })
                    }
                    containerStyle={styles.detailBtnContainer}
                  >
                    <Text textStyle={styles.detailBtnText} text="Detail" />
                  </TouchableOpacity>
                </View>
              ) : (
                <View>
                  <View>
                    {modal ? (
                      <FadeAnim style={styles.modal}>
                        <TouchableOpacity
                          activeOpacity={0.6}
                          onPress={() =>
                            navigation.navigate("Delete", { id: item.id })
                          }
                          style={styles.deleteBtnContainerModal}
                        >
                          <Text
                            textStyle={styles.deleteBtnTextModal}
                            text="Delete"
                          />
                        </TouchableOpacity>

                        <TouchableOpacity
                          activeOpacity={0.6}
                          onPress={() =>
                            navigation.navigate("Detail", { id: item.id })
                          }
                          containerStyle={styles.detailBtnContainerModal}
                        >
                          <Text
                            textStyle={styles.detailBtnText}
                            text="Detail"
                          />
                        </TouchableOpacity>
                      </FadeAnim>
                    ) : null}
                    <TouchableOpacity
                      activeOpacity={0.7}
                      style={{ alignItems: "flex-end", marginBottom: 15 }}
                      onPress={() => setModal(!modal)}
                    >
                      <SimpleLineIcons
                        name="options-vertical"
                        size={20}
                        color="black"
                      />
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() =>
                      navigation.navigate("MaternalRecord", { id: item.id })
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
    paddingLeft: 20,
    paddingRight: 20,
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
    width: Dimensions.get("window").width * 0.9,
    height: Dimensions.get("screen").height * 0.8,
    borderRadius: 10,
    alignItems: "center",
  },
  paramsContainer: {
    flexDirection: "row",
    marginTop: "6%",
  },
  left: {
    position: "absolute",
    left: "4%",
    marginTop: "6%",
  },
  parameters1: {
    fontSize: 24,
    color: Themes.primary,
    fontWeight: "900",
  },
  idNumber: {
    color: Themes.primary,
    fontSize: 20,
  },
  deleteBtnContainer: {
    borderWidth: 1,
    borderColor: "lightgray",
    marginBottom: 5,
    borderRadius: 4,
  },
  deleteBtnText: {
    paddingLeft: 5,
    paddingRight: 7,
    padding: 2,
    textAlign: "center",
  },
  detailBtnContainer: {
    borderRadius: 7,
  },
  detailBtnText: {
    padding: 5,
    fontWeight: "900",
    color: Themes.primary,
    backgroundColor: "lightblue",
    textAlign: "center",
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
    marginBottom: "3%",
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
  },
  modal: {
    height: 47,
    width: 82,
    backgroundColor: "lightblue",
    position: "absolute",
    right: "18%",
    top: -8,
    alignItems: "center",
    borderRadius: 5,
    zIndex: 2,
  },
  deleteBtnTextModal: {
    color: Themes.secondary,
    width: "100%",
    padding: 2,
  },
});
