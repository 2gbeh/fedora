import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/store/store.config";

const ReduxProviderWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  console.log("🚀 ~ ReduxProviderWrapper");
  // RENDER
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
};

export default React.memo(ReduxProviderWrapper);
