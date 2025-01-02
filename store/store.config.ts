import { useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
//
import { baseApi } from "./base/base.api";
import theme from "./theme/theme.slice";
import notice from "./notice/notice.slice";
import auth from "./auth/auth.slice";


export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    theme,
    notice,
    auth,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
