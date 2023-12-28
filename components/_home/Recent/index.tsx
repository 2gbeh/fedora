import * as STYLES from "styles";
import React from "react";
import { View, Text } from "react-native";
import Avatar, { AvatarText } from "components/Avatar";
//
import { $, isToday, NAIRA } from "utils";
import date from "utils/phpDateFormat";

import { styles, type TTransaction } from "./Recent.module";

const HomeRecent = ({ data }: { data: TTransaction[] | [] }) => {
  return (
    <>
      {data ? (
        data.length > 0 ? (
          data.map((e, i) => (
            <View
              key={i}
              style={[STYLES.Flex.rowStartBetween, styles.container]}
            >
              <View style={[STYLES.Flex.rowCenterStart, { gap: 10 }]}>
                <View>
                  <View style={styles.avatarParent}>
                    {e.account?.avatar ? (
                      <Avatar uri={e.account.avatar} size={48} radius={10} />
                    ) : (
                      <AvatarText name={e.account.name} size={48} radius={10} />
                    )}
                  </View>
                  <View style={styles.avatarChild}>
                    {e.wallet?.avatar ? (
                      <Avatar uri={e.wallet.avatar} size={18} />
                    ) : (
                      <AvatarText name={e.wallet.name} size={18} />
                    )}
                  </View>
                </View>
                <View>
                  <Text style={styles.title}>
                    {e.account?.display_name || e.account.name}
                  </Text>
                  <Text style={styles.narration} numberOfLines={1}>{e.narration}</Text>
                </View>
              </View>
              <View style={[STYLES.Flex.columnEnd, { gap: 5 }]}>
                <Text style={styles.amount(e.type)}>
                  {e.type < 1 && "-"}
                  {NAIRA}{$(e.amount)}
                </Text>
                <Text style={styles.date}>
                  {isToday(e.transaction_date)
                    ? "Today"
                    : date(e.transaction_date, "M j")}
                </Text>
              </View>
            </View>
          ))
        ) : (
          <Text>No content</Text>
        )
      ) : (
        <Text>Loading...</Text>
      )}
    </>
  );
};

export default React.memo(HomeRecent);
