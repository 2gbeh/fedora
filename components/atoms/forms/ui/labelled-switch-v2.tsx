import { useState, useRef, useEffect } from "react";
import {
  TouchableOpacity,
  Animated,
  StyleSheet,
  View,
  Text,
} from "react-native";
//
import { flexStyles } from "@/styles/flex-styles";
import { textStyles } from "@/styles/text-styles";
import { InputProps } from "../types";
import { COLOR } from "@/constants/COLOR";

interface Props extends Omit<InputProps, "value" | "onChange"> {
  value?: boolean;
  onChange?: (value?: boolean) => void;
}

export const LabelledSwitchV2 = (props: Props) => {
  const anim = useRef(new Animated.Value(0)).current;
  const [checked, setChecked] = useState(false);

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

  return (
    <View style={sx.container}>
      <Text style={sx.text}>{props.label}</Text>
      <TouchableOpacity
        onPress={() => setChecked(!checked)}
        activeOpacity={0.8}
      >
        <Animated.View style={[sx.track, { backgroundColor: trackColor }]}>
          <Animated.View style={[sx.thumb, { left: thumbPosition }]} />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const sx = StyleSheet.create({
  _: {},
  container: {
    marginVertical: 4,
    ...flexStyles.rowCenterBetween,
  },
  text: {
    color: COLOR.primary,
    ...textStyles.label_medium,
  },
  track: {
    borderRadius: 14,
    justifyContent: "center",
    width: 48,
    height: 28,
  },
  thumb: {
    backgroundColor: COLOR.offWhite,
    borderRadius: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 2,
    width: 24,
    height: 24,
    position: "absolute",
  },
});
