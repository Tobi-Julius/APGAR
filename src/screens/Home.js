import { ScrollView, RefreshControl } from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";

import { theme } from "../constants";
import { auth, db } from "../firebase/firebase-config";

import { HomeHeader, HomeBody } from "../components/primary";

import react from "react";
import { layout } from "../utils";

const wait = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

export const Home = () => {
  // const [patientValue, setPatientValue] = useState([]);

  // const getData = async () => {
  //   const q = query(collection(db, `users/${auth.currentUser.uid}/user`));
  //   const querySnapshot = await getDocs(q);
  //   const data = querySnapshot.docs.map((doc) => ({
  //     ...doc.data(),
  //     id: doc.id,
  //   }));
  //   setPatientValue(data);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  // const Header = () => {
  //   return (
  //     <View style={styles.headerContainer}>
  //       <View
  //         style={{
  //           flexDirection: "row",
  //           alignItems: "center",
  //           justifyContent: "space-between",
  //           width: "90%",
  //           marginTop: "8%",
  //         }}
  //       >
  //         <TouchableOpacity
  //           activeOpacity={0.6}
  //           onPress={() => navigation.openDrawer()}
  //         >
  //           <Image
  //             source={icon.open}
  //             style={{
  //               width: 20,
  //               height: 20,
  //             }}
  //           />
  //         </TouchableOpacity>
  //         <View>
  //           <Image source={image.APGARlogo} />
  //         </View>
  //         <TouchableOpacity
  //           activeOpacity={0.6}
  //           onPress={() => navigation.navigate("Notification")}
  //         >
  //           <Ionicons
  //             name="md-notifications-outline"
  //             size={25}
  //             color={theme.white}
  //           />
  //         </TouchableOpacity>
  //       </View>
  //       <TextInput
  //         // inputType="Numeric"
  //         onChangeText={async (text) => {
  //           const q = query(
  //             collection(db, `users/${auth.currentUser.uid}/user`),
  //             where("motherId", "==", text.toLowerCase())
  //           );
  //           const querySnapshot = await getDocs(q);
  //           const data = querySnapshot.docs.map((doc) => ({
  //             ...doc.data(),
  //             id: doc.id,
  //           }));
  //           setPatientValue(data);
  //         }}
  //         containerStyle={{
  //           width: " 90%",
  //           height: "45%",
  //           borderRadius: 6,
  //           marginTop: 8,
  //         }}
  //         placeholder="Search ID"
  //         textInputStyle={{
  //           color: theme.text,
  //           backgroundColor: theme.white,
  //           borderRadius: 5,
  //           padding: 8,
  //         }}
  //       />
  //     </View>
  //   );
  // };
  // const Body = () => {
  //   return (
  //     <View style={styles.body}>
  //       <View style={styles.one}>
  //         <View style={{ marginTop: 12 }}>
  //           <Text
  //             textStyle={{ fontSize: 13, marginBottom: 3 }}
  //             text="Take APGAR Score"
  //           />
  //           <View style={{ borderRadius: 20, height: "93%" }}>
  //             <Image
  //               source={image.APGARScore}
  //               style={{
  //                 width: "100%",
  //                 height: "100%",
  //                 borderRadius: 20,
  //                 position: "relative",
  //               }}
  //             />
  //             <View
  //               style={{
  //                 position: "absolute",
  //                 bottom: 0,
  //                 flexDirection: "row",
  //                 width: "100%",
  //                 backgroundColor: theme.fadeBackground,
  //                 justifyContent: "space-between",
  //                 paddingRight: 5,
  //                 alignItems: "center",
  //                 borderBottomRightRadius: 19,
  //                 borderBottomLeftRadius: 19,
  //                 zIndex: 1,
  //               }}
  //             >
  //               <View
  //                 style={{
  //                   marginBottom: 5,
  //                   width: "77%",
  //                 }}
  //               >
  //                 <Text
  //                   textStyle={{ fontSize: 11, letterSpacing: -0.3 }}
  //                   text="Instantly input APGAR parameters and generate"
  //                 />
  //                 <Text
  //                   textStyle={{ fontSize: 10, letterSpacing: -0.7 }}
  //                   text="APGAR score of a new born baby"
  //                 />
  //               </View>
  //               <Button
  //                 onPress={() => {
  //                   navigation.navigate("Take APGAR Score");
  //                 }}
  //                 containerStyle={{
  //                   borderRadius: 5,
  //                   width: "23%",
  //                 }}
  //                 textStyle={{
  //                   fontSize: 10,
  //                   padding: 6,
  //                   color: theme.white,
  //                   letterSpacing: -0.8,
  //                 }}
  //                 title="Take Score"
  //               />
  //             </View>
  //           </View>
  //         </View>
  //       </View>
  //       <View style={styles.two}>
  //         <View style={{ marginTop: 17 }}>
  //           <Text
  //             textStyle={{ fontSize: 13, marginBottom: 3 }}
  //             text="Check APGAR database"
  //           />
  //           <View style={{ borderRadius: 20, height: "93%" }}>
  //             <Image
  //               source={image.database}
  //               style={{
  //                 width: "100%",
  //                 height: "100%",
  //                 borderRadius: 20,
  //                 position: "relative",
  //               }}
  //             />
  //             <View
  //               style={{
  //                 position: "absolute",
  //                 bottom: 0,
  //                 flexDirection: "row",
  //                 width: "100%",
  //                 backgroundColor: theme.fadeBackground,
  //                 justifyContent: "space-between",
  //                 paddingRight: 5,
  //                 alignItems: "center",
  //                 borderBottomRightRadius: 19,
  //                 borderBottomLeftRadius: 19,
  //                 zIndex: 1,
  //                 padding: 5,
  //               }}
  //             >
  //               <View
  //                 style={{
  //                   marginBottom: 5,
  //                   width: "65%",
  //                 }}
  //               >
  //                 <Text
  //                   textStyle={{ fontSize: 11, letterSpacing: -0.3 }}
  //                   text="Easy access to APGAR database"
  //                 />
  //               </View>
  //               <Button
  //                 onPress={() => {
  //                   navigation.navigate("Database");
  //                 }}
  //                 containerStyle={{
  //                   borderRadius: 5,
  //                   width: "30%",
  //                 }}
  //                 textStyle={{
  //                   fontSize: 10,
  //                   padding: 6,
  //                   color: theme.white,
  //                   letterSpacing: -0.8,
  //                 }}
  //                 title="Check Database"
  //               />
  //             </View>
  //           </View>
  //         </View>
  //       </View>
  //       <View style={styles.three}>
  //         <Text
  //           textStyle={{ fontSize: 13, marginBottom: "1%" }}
  //           text="Past Records"
  //         />
  //         {patientValue < 1 ? (
  //           <View
  //             style={{
  //               alignItems: "center",
  //               justifyContent: "center",
  //               height: "100%",
  //             }}
  //           >
  //             <Text
  //               style={{
  //                 color: theme.secondary,
  //               }}
  //               text="EXPLORE OUR APP"
  //             />
  //           </View>
  //         ) : (
  //           <FlatList
  //             horizontal
  //             data={patientValue}
  //             renderItem={({ item, index }) => {
  //               return (
  //                 <View
  //                   style={{
  //                     marginLeft: 17,
  //                     right: 15,
  //                     borderRadius: 8,
  //                   }}
  //                 >
  //                   <Image
  //                     source={{ uri: item.image }}
  //                     style={styles.babyImage}
  //                   />
  //                   <View style={styles.idContainer}>
  //                     <Text
  //                       textStyle={{ fontSize: 6, color: "#000" }}
  //                       text="ID"
  //                     />
  //                     <Text
  //                       textStyle={{ fontSize: 10, color: theme.primary }}
  //                       text={item.motherId}
  //                     />
  //                   </View>
  //                   <View style={styles.scoreContainer}>
  //                     <View>
  //                       <Text textStyle={{ fontSize: 7 }} text="Score" />
  //                       <Text
  //                         textStyle={{ color: theme.primary, fontSize: 10 }}
  //                         text={`${item.score}`}
  //                       />
  //                     </View>
  //                     <View>
  //                       <SimpleLineIcons
  //                         name="options-vertical"
  //                         size={11}
  //                         color="black"
  //                       />
  //                     </View>
  //                   </View>
  //                 </View>
  //               );
  //             }}
  //           />
  //         )}
  //       </View>
  //       <View style={styles.four}>
  //         <View style={styles.top} />
  //         <View style={styles.homeIcon}>
  //           <Octicons name="home" color={theme.primary} size={20} />
  //         </View>
  //         <View style={styles.bottom} />
  //       </View>
  //     </View>
  //   );
  // };

  const [refreshing, setRefreshing] = useState(false);

  return (
    <ScrollView
      style={{ backgroundColor: theme.white, flex: 1, height: layout.height }}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          color={"red"}
          enabled
          progressBackgroundColor={"white"}
          size="default"
          onRefresh={react.useCallback(() => {
            setRefreshing(true);
            wait(3000)
              .then((res) => {
                console.warn("REFRESHING");
                setRefreshing(false);
              })
              .catch((err) => {
                console.warn(err);
              });
          }, [refreshing])}
        />
      }
    >
      <HomeHeader />
      <HomeBody />
    </ScrollView>
  );
};
