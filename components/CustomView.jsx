import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "react-native-paper";

const CustomView = ({ children, ...props }) => {
  const theme = useTheme();

  return (
    <SafeAreaView
      style={{ backgroundColor: theme.colors.surface, flex: 1 }}
      {...props}
    >
      {children}
    </SafeAreaView>
  );
};

export default CustomView;
