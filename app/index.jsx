import React, { useCallback } from "react";
import { Button, Text } from "react-native-paper";
import { router } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import PacificoFont from "../assets/fonts/Pacifico-Regular.ttf";
import CustomView from "../components/CustomView";

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
      <Text variant="displayLarge">Home</Text>
      <Button mode="elevated" onPress={() => router.push("/login")}>
        Login
      </Button>
    </CustomView>
  );
};

export default HomeScreen;
