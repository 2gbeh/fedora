import React from "react";
import { View, Text } from "react-native";
import SketchBox from "@/components/SketchBox";
//
import { styles_flex } from "@/styles/Flex.module";
import styles from "./Favorites.module";
import { TAccount } from "@/server/accounts/account.entity";
import { AccountPipe } from "@/server/accounts/account.pipe";

type TFavorites = { index?: number; item: TAccount };

const Favorites = ({ index, item }: TFavorites) => {
  const accountPipe = AccountPipe.transform(item);
  //
  return (
    <>
      {index! < 1 ? (
        <View style={[styles_flex.col_center, styles.add]}>
          <View style={[styles_flex.row_center_center, styles.add_button]}>
            <Text style={styles.add_label}>+</Text>
          </View>
          <Text style={styles.add_text}>Add</Text>
        </View>
      ) : null}

      <View style={styles.container}>
        <SketchBox as="Avatar" size={45} />
        <Text style={styles.name}>{accountPipe.initials}</Text>
      </View>
    </>
  );
};
export default React.memo(Favorites);
