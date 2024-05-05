import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import SketchBox from "../SketchBox";
//
import useSearchBar from "./useSearchBar";
import styles, { style } from "./SearchBar.module";

const SearchBar = () => {
  const { pathname, searchInput, setSearchInput, handlePress } = useSearchBar();
  //
  return (
    <View style={styles.container}>
      <TextInput
        inputMode="search"
        value={searchInput}
        onChangeText={(value) => setSearchInput(value)}
        placeholder="Search ( / )"
        placeholderTextColor={style.placeholder}
        selectTextOnFocus
        style={styles.input}
      />

      {/* BUTTON */}
      <TouchableOpacity onPress={handlePress} style={styles.button}>
        <SketchBox as="SearchIcon" size={16} alt />
      </TouchableOpacity>
    </View>
  );
};
export default React.memo(SearchBar);
