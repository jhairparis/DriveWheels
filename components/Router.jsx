import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Tabs } from "expo-router";
import BottomNavigationWrap from "./ui/BottomNavigation";

const Router = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({ navigation, state, descriptors, insets }) => (
        <BottomNavigationWrap
          navigation={navigation}
          state={state}
          descriptors={descriptors}
          insets={insets}
        />
      )}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Icon name="account" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarLabel: "Setting",
          tabBarIcon: ({ color, size }) => (
            <Icon name="cog" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Router;
