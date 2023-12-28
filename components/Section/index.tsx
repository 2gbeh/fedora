import * as STYLES from "styles";
import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
//
import { styles, type TSection } from "./Section.module";

const Section = ({ label, action }: TSection) => {
  return (
    <View style={[STYLES.Flex.rowCenterBetween, styles.container]}>
      <Text>{label}</Text>
      {action && (
        <TouchableWithoutFeedback onPress={action.handlePress}>
          <View>
            <Text style={{ fontSize: 12, color: "#777" }}>{action.text}</Text>
          </View>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
};

export default React.memo(Section);
