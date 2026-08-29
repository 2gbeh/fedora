import { useState, useRef, useEffect } from "react";
import {
  TouchableOpacity,
  Animated,
  View,
  Text,
  ViewStyle,
  TextStyle,
} from "react-native";
//
import { flexStyles } from "@/styles/flex-styles";
import { textStyles } from "@/styles/text-styles";
import { InputProps } from "../types";
import { COLOR } from "@/constants/COLOR";

interface Props extends Omit<InputProps, "value" | "onChange"> {
  value?: boolean;
  onChange?: (value?: boolean) => void;
  height?: number;
}

export const LabelledSwitchV2 = (props: Props) => {
  const anim = useRef(new Animated.Value(0)).current;
  const [checked, setChecked] = useState(props.value);

  const trackColor = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [COLOR.primaryDisabled, COLOR.primary],
  });

  const thumbPosition = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 22],
  });

  useEffect(() => {
    Animated.timing(anim, {
      toValue: checked ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [checked]);

  const handleChange = () => {
    setChecked(!checked);
    if (props.onChange) props.onChange(!checked);
  };

  return (
    <View style={sx.container(props.height)}>
      <Text style={sx.text}>{props.label}</Text>
      <TouchableOpacity onPress={handleChange} activeOpacity={0.8}>
        <Animated.View
          style={[sx.track(checked), { backgroundColor: trackColor }]}
        >
          <Animated.View
            style={[sx.thumb, { borderColor: trackColor, left: thumbPosition }]}
          />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const sx = {
  _: {},
  container: (height?: number) =>
    ({
      // borderWidth: 1,
      height: height || 32,
      ...flexStyles.rowCenterBetween,
    }) as ViewStyle,
  text: {
    color: COLOR.primary,
    ...textStyles.label_medium,
  } as TextStyle,
  track: (checked?: boolean) =>
    ({
      borderColor: checked ? COLOR.primary : COLOR.border,
      borderWidth: 1,
      borderRadius: 14,
      justifyContent: "center",
      width: 48,
      height: 26,
    }) as ViewStyle,
  thumb: {
    backgroundColor: COLOR.white,
    borderWidth: 1,
    borderRadius: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 2,
    width: 24,
    height: 22,
    position: "absolute",
  } as ViewStyle,
};
