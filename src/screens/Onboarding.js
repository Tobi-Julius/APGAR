import React, { useState, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { Text } from "../components/common";
import { globalStyles } from "../styles";
import { image, theme } from "../constants";
import { layout } from "../utils";

export const Onboarding = ({ navigation }) => {
  const ref = useRef();

  const onboardingData = [
    {
      id: 1,
      text: "APGAR Database",
      subText: "Record and Store APGAR Score",
      image: image.onboarding1,
    },
    {
      id: 2,
      text: "Register your Hospital ",
      subText: "Get your hospital on our hospital listing",
      image: image.onboarding2,
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={[styles.imageTextContainer, { alignItems: "center" }]}>
        <Image source={item.image} style={styles.image} />

        <View style={[styles.textContainer]}>
          <Text text={item.text} textStyle={styles.text} />
          <Text text={item.subText} textStyle={styles.subText} />
        </View>
      </View>
    );
  };

  const Slider = () => {
    return (
      <View style={styles.Slider}>
        {onboardingData.map((_, index) => {
          return (
            <View
              key={index}
              style={[
                styles.sliderRings,
                currentIndex === index && {
                  width: layout.widthPixel(14),
                  height: layout.heightPixel(8),
                  backgroundColor: theme.primary,
                },
              ]}
            />
          );
        })}
      </View>
    );
  };

  const Footer = () => {
    return (
      <View style={styles.Footer}>
        {currentIndex === onboardingData.length - 1 ? (
          <View style={[styles.innerContainer, globalStyles.rowBetween]}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => navigation.replace("Register")}
              style={styles.leftText}
            >
              <Text textStyle={styles.register} text="Register" />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => navigation.replace("SignIn")}
              style={styles.rightText}
            >
              <Text textStyle={styles.signIn} text="Sign In" />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={[styles.innerContainer, globalStyles.rowBetween]}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => navigation.replace("Register")}
              style={styles.leftText}
            >
              <Text textStyle={styles.skip} text="Skip" />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={goNextSlide}
              style={[styles.rightText, globalStyles.rowCenter]}
            >
              <AntDesign color="#fff" size={18} name="arrowright" />
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / layout.width);
    setCurrentIndex(currentIndex);
  };
  const goNextSlide = () => {
    const nextSlideIndex = currentIndex + 1;
    {
      if (nextSlideIndex !== onboardingData.length) {
        const offset = nextSlideIndex * layout.width;
        ref?.current?.scrollToOffset({ offset });
        setCurrentIndex(nextSlideIndex);
      }
    }
  };
  return (
    <SafeAreaView>
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        data={onboardingData}
        renderItem={renderItem}
      />
      {Slider()}
      {Footer()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageTextContainer: {
    width: layout.width,
    marginTop: layout.pixelSizeVertical(130),
  },
  textContainer: {
    alignItems: "center",
    marginVertical: layout.heightPixel(100),
  },
  text: {
    fontFamily: "Montserrat_700Bold",
    fontSize: layout.size.h2,
    color: theme.primary,
  },
  subText: {
    fontFamily: "Montserrat_400Regular",
    fontSize: layout.size.h4,
    color: theme.primary,
    letterSpacing: 0.5,
  },
  image: {
    height: layout.heightPixel(249),
    resizeMode: "contain",
    width: layout.widthPixel(288),
  },
  Slider: {
    height: layout.heightPixel(10),

    flexDirection: "row",
    justifyContent: "center",
  },
  sliderRings: {
    height: layout.heightPixel(7),
    width: layout.widthPixel(7),
    backgroundColor: theme.text,
    borderRadius: layout.fontPixel(30),
    marginLeft: layout.pixelSizeHorizontal(5),
  },
  Footer: {
    height: layout.heightPixel(180),
    justifyContent: "flex-end",
  },
  skip: {
    fontFamily: "Montserrat_400Regular",
    fontSize: layout.size.h4,
    color: theme.primary,
  },
  register: {
    fontFamily: "Montserrat_400Regular",
    fontSize: layout.size.h4,
    color: theme.primary,
  },
  signIn: {
    fontFamily: "Montserrat_400Regular",
    fontSize: layout.size.h4,
    color: theme.white,
  },

  rightText: {
    backgroundColor: theme.primary,
    paddingVertical: layout.pixelSizeVertical(10),
    paddingHorizontal: layout.pixelSizeHorizontal(20),
    borderRadius: layout.fontPixel(10),
    fontSize: layout.size.h6,
  },
  innerContainer: {
    paddingHorizontal: layout.pixelSizeHorizontal(30),
  },
});
