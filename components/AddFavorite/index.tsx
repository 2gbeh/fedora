import React from "react";
import { View, Text } from "react-native";
import { Link } from "expo-router";
//
import styles from "./AddFavorite.module";

const AddFavorite = () => {
  return (
    <Link href="/">
      <View style={styles.container}>
        <View style={styles.button}>
          <Text style={styles.button_text}>+</Text>
        </View>
        <Text style={styles.label}>Add</Text>
      </View>
    </Link>
  );
};
export default React.memo(AddFavorite);
