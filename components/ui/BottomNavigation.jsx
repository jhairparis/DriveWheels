import React from "react";
import { BottomNavigation } from "react-native-paper";
import Touchable from "@/components/ui/Touchable";

const BottomNavigationWrap = ({ navigation, state, descriptors, insets }) => {
  const renderTouchable = (props) => {
    const notShow = ["_sitemap", "[...404]"];

    if (notShow[props.route.name]) return null;

    return <Touchable {...props} />;
  };

  const onTabPress = ({ route, preventDefault }) => {
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
  };

  const renderIcon = ({ route, focused, color }) => {
    const { options } = descriptors[route.key];

    if (options.tabBarIcon) {
      return options.tabBarIcon({ focused, color, size: 24 });
    }

    return null;
  };

  const getLabelText = ({ route }) => {
    const { options } = descriptors[route.key];

    if (options.tabBarLabel !== undefined) return options.tabBarLabel;
    else if (options.title !== undefined) return options.title;
    else return route.title;
  };

  return (
    <BottomNavigation.Bar
      navigationState={state}
      safeAreaInsets={insets}
      renderTouchable={renderTouchable}
      onTabPress={onTabPress}
      renderIcon={renderIcon}
      getLabelText={getLabelText}
    />
  );
};

export default BottomNavigationWrap;
