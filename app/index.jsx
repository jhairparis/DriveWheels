import React, { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import PacificoFont from "../assets/fonts/Pacifico-Regular.ttf";
import CustomView from "../components/CustomView";
import Home from "../components/Home";

SplashScreen.preventAutoHideAsync();

const HomeScreen = () => {
  const [fontsLoaded, fontError] = useFonts({
    Pacifico: PacificoFont,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <CustomView onLayout={onLayoutRootView}>
      <Home />
    </CustomView>
  );
};

export default HomeScreen;
