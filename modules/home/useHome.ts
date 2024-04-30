import { useState } from "react";
import { zzz } from "@/utils";

export function useHome() {
  const [refetching, setRefetching] = useState(false);

  async function handleRefetch() {
    setRefetching(true);
    await zzz();
    setRefetching(false);
  }

  //
  return { refetching, handleRefetch };
}
