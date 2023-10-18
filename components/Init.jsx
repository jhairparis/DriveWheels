import React from "react";
import { View } from "react-native";
import { router } from "expo-router";
import { Button, Text } from "react-native-paper";

const Init = () => {
  return (
    <View>
      <Text variant="displayLarge">Home</Text>
      <Button mode="elevated" onPress={() => router.push("/login")}>
        Login
      </Button>
    </View>
  );
};

export default Init;
