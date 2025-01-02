import React from "react";
import { render } from "@testing-library/react-native";
//
import ReduxProviderWrapper from "@/components/_providers/ReduxProviderWrapper";
import PaperProviderWrapper from "@/components/_providers/PaperProviderWrapper";
import DispatchNotice from "@/components/dispatch-notice";

export const renderWithProviders = (screen: React.JSX.Element) =>
  render(
    <ReduxProviderWrapper>
      <PaperProviderWrapper>
        {screen}
        <DispatchNotice />
      </PaperProviderWrapper>
    </ReduxProviderWrapper>
  );
