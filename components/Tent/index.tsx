import React from "react";
import { Text, View } from "react-native";
import { Link, usePathname } from "expo-router";
import SketchBox from "../SketchBox";
import Logo from "../Logo";
//
import styles from "./Tent.module";

const Tent = () => {
  const pathname = usePathname();
  // console.log(pathname);
  return (
    <View style={styles.container}>
      <View style={styles.figure}>
        <Logo width={48} />
      </View>
      <View style={styles.hgroup}>
        <Text style={styles.h1}>404 Not Found</Text>
        <Text style={styles.p}>
          It appears the requested screen at
          <Text style={styles.mark}>{pathname}</Text>
          does not exist or has been moved temporarily.
        </Text>
      </View>
      <View style={styles.footer}>
        <Link href="/" style={styles.button}>
          <SketchBox as="ChevronLeft" size={12} />
          <Text style={styles.label}>Go back</Text>
        </Link>
      </View>
    </View>
  );
};

export default React.memo(Tent);
