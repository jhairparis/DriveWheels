import React from "react";
import { View } from "react-native";
import { TouchableRipple } from "react-native-paper";
import { TouchableWithoutFeedback } from "react-native";

const Touchable = ({
  route: _0,
  style,
  children,
  borderless,
  centered,
  rippleColor,
  ...rest
}) =>
  TouchableRipple.supported ? (
    <TouchableRipple
      {...rest}
      disabled={rest.disabled || undefined}
      borderless={borderless}
      centered={centered}
      rippleColor={rippleColor}
      style={style}
    >
      {children}
    </TouchableRipple>
  ) : (
    <TouchableWithoutFeedback {...rest}>
      <View style={style}>{children}</View>
    </TouchableWithoutFeedback>
  );

export default Touchable;
