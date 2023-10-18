import React, { useCallback } from "react";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import { View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import PacificoFont from "@/assets/fonts/Pacifico-Regular.ttf";
import ThemeProvider from "@/components/providers/ThemeProvider";
import { SessionProvider } from "@/components/providers/SessionProvider";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
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
    <SessionProvider>
      <ThemeProvider>
        <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
          <Slot />
        </View>
      </ThemeProvider>
    </SessionProvider>
  );
}
