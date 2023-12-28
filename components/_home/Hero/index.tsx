import * as STYLES from "styles";
import React from "react";
import { View, Text } from "react-native";
//
import { $, kk, NAIRA } from "utils";

import { styles, type TTransaction } from "./Hero.module";

const HomeHero = () => {
  return (
    <View style={styles.container}>
      <View
        style={[
          STYLES.Flex.rowStartBetween,
          {
            border: "1px solid transparent",
            flex: "",
            padding: 10,
            paddingBottom: 5,
          },
        ]}
      >
        <Text style={{ color: "white" }}>&lt; Nov</Text>
        <Text style={{ color: "white" }}>Jan &gt;</Text>
      </View>
      {/*  */}
      <View style={{ border: "1px solid transparent", flex: "" }}>
        <View style={[STYLES.Flex.columnCenterCenter]}>
          <Text style={{ color: "white", fontSize: 10 }}>TOTAL INCOME</Text>
          <Text style={{ color: "white", fontSize: 48, lineHeight: 40 }}>
            {NAIRA}
            {kk(6689462)}
          </Text>
          <Text style={{ color: "white", marginTop: 15, fontSize: 10 }}>
            TOTAL EXPENSE
          </Text>
          <Text style={{ color: "white", fontSize: 18 }}>
            {NAIRA} {$(6419525 - 600000)}
            <Text
              style={{
                fontSize: 10,
                marginLeft: 5,
                verticalAlign: "top",
                fontWeight: "bold",
              }}
            >
              ^92%
            </Text>
          </Text>
          <Text style={{ color: "white", fontSize: 10, margin: 5 }}>
            Your income is down by{" "}
            <Text style={{ color: "#D81B60", marginRight: 2 }}>35%</Text> this
            month
          </Text>
        </View>
      </View>
    </View>
  );
};

export default React.memo(HomeHero);
