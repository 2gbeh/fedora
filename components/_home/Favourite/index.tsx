import * as STYLES from "styles";
import React from "react";
import { View, Text } from "react-native";
import Avatar, { AvatarText } from "components/Avatar";
//
import { $, NAIRA } from "utils";

import { styles, type TTransaction } from "./Favourite.module";

const HomeFavourite = ({ data }: { data: TTransaction[] | [] }) => {
  return (
    <View style={[STYLES.Flex.rowCenterStart, { columnGap: 10 }]}>
      {data ? (
        data.length > 0 ? (
          data.slice(0, 3).map((e, i) => (
            <View
              key={i}
              style={[
                STYLES.Flex.columnStart,
                {
                  background: "#edf7fd",
                  border: "1px solid #d4e1e8",
                  borderRadius: 10,
                  padding: 10,
                },
              ]}
            >
              <View style={[STYLES.Flex.rowStartBetween, { width: "100%" }]}>
                <View style={{ flex: 2, width: "100%" }}>
                  {e.account?.avatar ? (
                    <Avatar uri={e.account.avatar} size={32} radius={10} />
                  ) : (
                    <AvatarText name={e.account.name} size={32} radius={10} />
                  )}
                </View>
                <View
                  style={{
                    flex: 2,
                    width: "100%",
                    alignItems: "flex-end",
                  }}
                >
                  <Text style={{ fontSize: 10, color: "coral" }}>^50%</Text>
                </View>
              </View>
              <Text
                style={[styles.title, { fontSize: 14, marginVertical: 2 }]}
                numberOfLines={1}
              >
                {e.account?.display_name || e.account.name}
              </Text>
              <Text style={{ fontSize: 12, color: "#16BC00" }}>
                {e.type < 1 && "-"}
                {NAIRA}
                {$(e.amount * 1000)}
              </Text>
              <Text style={{ fontSize: 10, color: "#e11" }}>
                {e.type < 1 && "-"}
                {NAIRA}
                {$(e.amount * 500)}
              </Text>
            </View>
          ))
        ) : (
          <Text>No content</Text>
        )
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default React.memo(HomeFavourite);
