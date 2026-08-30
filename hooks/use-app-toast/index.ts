import { useEffect } from "react";
import Toast from "react-native-toast-message";

const options = (forceClose?: boolean) => ({
  topOffset: 48,
  visibilityTime: 2500,
  autoHide: !forceClose,
});

export function useAppToast() {
  const info = (text2: string, forceClose?: boolean) => {
    Toast.show({ text2, type: "info", ...options(forceClose) });
  };
  const success = (text2: string, forceClose?: boolean) => {
    Toast.show({ text2, type: "success", ...options(forceClose) });
  };
  const warning = (text2: string, forceClose?: boolean) => {
    Toast.show({ text2, type: "warning", ...options(forceClose) });
  };
  const danger = (text2: string, forceClose?: boolean) => {
    Toast.show({ text2, type: "danger", ...options(forceClose) });
  };

  useEffect(() => {
    return;
    const timeout1 = setTimeout(() => {
      info("Something went wrong, try again!");
    }, 1000);

    const timeout2 = setTimeout(() => {
      success("Transaction saved successfully!");
    }, 2000);

    const timeout3 = setTimeout(() => {
      warning("Network error, check internet connection!");
    }, 3000);

    const timeout4 = setTimeout(() => {
      danger("Contact not found!", true);
    }, 4000);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
      clearTimeout(timeout4);
    };
  }, []);

  return { info, success, warning, danger };
}
