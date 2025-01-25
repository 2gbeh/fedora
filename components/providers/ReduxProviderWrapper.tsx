import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/store/store.config";

export function ReduxProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
}
