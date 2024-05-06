import { useState } from "react";
import { Href, router, usePathname } from "expo-router";
import { Alert } from "react-native";

const error = "Please input something to search results across database";

export default function useSearchBar() {
  const pathname = usePathname();
  const [searchInput, setSearchInput] = useState("");
  //
  async function handlePress() {
    if (searchInput.trim().length < 1) {
      return window ? alert(error) : Alert.alert("Danger", error);
    }
    //
    if (pathname.startsWith("/search")) {
      router.setParams({ searchInput });
    } else {
      router.push(`/search/${searchInput}` as Href<string>);
    }
  }
  //
  return {
    pathname,
    searchInput,
    setSearchInput,
    handlePress,
  };
}
