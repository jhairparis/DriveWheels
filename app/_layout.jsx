import { BottomNavigation } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Slot, Tabs } from "expo-router";
import Touchable from "../components/Touchable";
import ThemeProvider from "../components/ThemeProvider";

export default function Layout() {
  // return <Slot />;

  return (
    <ThemeProvider>
      <Tabs
        screenOptions={{
          headerShown: false,
        }}
        tabBar={({ navigation, state, descriptors, insets }) => (
          <BottomNavigation.Bar
            navigationState={state}
            safeAreaInsets={insets}
            renderTouchable={(props) => {
              if (
                props.route.name === "_sitemap" ||
                props.route.name === "[...404]"
              ) {
                return null;
              }
              return <Touchable {...props} />;
            }}
            onTabPress={({ route, preventDefault }) => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });

              if (event.defaultPrevented) {
                preventDefault();
              } else {
                navigation.dispatch({
                  ...navigation.navigate(route.name, route.params),
                  target: state.key,
                });
              }
            }}
            renderIcon={({ route, focused, color }) => {
              const { options } = descriptors[route.key];
              if (options.tabBarIcon) {
                return options.tabBarIcon({ focused, color, size: 24 });
              }

              return null;
            }}
            getLabelText={({ route }) => {
              const { options } = descriptors[route.key];
              const label =
                options.tabBarLabel !== undefined
                  ? options.tabBarLabel
                  : options.title !== undefined
                  ? options.title
                  : route.title;

              return label;
            }}
          />
        )}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => {
              return <Icon name="home" size={size} color={color} />;
            },
          }}
        />
        <Tabs.Screen
          name="(auth)/login/index"
          options={{
            tabBarLabel: "Login",
            tabBarIcon: ({ color, size }) => {
              return <Icon name="login" size={size} color={color} />;
            },
          }}
        />
        <Tabs.Screen
          name="(auth)/register/index"
          options={{
            tabBarLabel: "Register",
            tabBarIcon: ({ color, size }) => {
              return <Icon name="account-plus" size={size} color={color} />;
            },
          }}
        />
      </Tabs>
    </ThemeProvider>
  );
}
