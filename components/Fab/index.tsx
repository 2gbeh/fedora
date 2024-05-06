import React from "react";
import { Text, View } from "react-native";
import { Href, Link } from "expo-router";
import SketchBox from "../SketchBox";
//
import styles from "./Fab.module";

const Fab = ({ path, bottom }: { path: string; bottom?: number }) => {
  return (
    <Link
      href={path as Href<string>}
      style={styles.container(bottom)}
    >
      <Text style={styles.content}>+</Text>
      {/* <SketchBox as="PlusIcon" size={16} /> */}
    </Link>
  );
};

export default React.memo(Fab);
