import React from "react";
import { Snackbar } from "react-native-paper";
//
import { useDispatchNotice } from "./hook";

const DispatchNotice: React.FC = () => {
  const { visible, as, message, dispatchReset } = useDispatchNotice();
  console.log("🚀 ~ DispatchNotice");
  // RENDER
  return as === "toast" ? (
    <Snackbar
      visible={visible}
      onDismiss={dispatchReset}
      action={{ label: "Dismiss" }}
    >
      {message}
    </Snackbar>
  ) : null;
};

export default React.memo(DispatchNotice);
