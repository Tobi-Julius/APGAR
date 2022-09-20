import { useEffect, useState } from "react";

import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

export const useFont = () => {
  const [isFontReady, setIsFontReady] = useState(false);

  SplashScreen.preventAutoHideAsync();

  const subscribe = async () => {
    try {
      await Font.loadAsync({
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_600SemiBold,
        Montserrat_700Bold,
      });
    } catch (error) {
      console.warn(error);
    } finally {
      Font.isLoaded ? setIsFontReady(true) : setIsFontReady(false);
    }
  };
  useEffect(() => {
    subscribe();
  });

  const unSubscribe = async () => {
    isFontReady ? SplashScreen.hideAsync() : null;
  };

  useEffect(() => {
    unSubscribe();
  });

  return { isFontReady };
};
