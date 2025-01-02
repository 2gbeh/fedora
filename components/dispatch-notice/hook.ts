import { useAppDispatch, useAppSelector } from "@/store/store.config";
import { noticeActions } from "@/store/notice/notice.slice";

export function useDispatchNotice() {
  const dispatch = useAppDispatch();
  const { visible, as, title, message } = useAppSelector(
    (state) => state.notice
  );

  const dispatchReset = () => {
    let thunkAction = noticeActions.reset();
    dispatch(thunkAction);
  };

  const dispatchAlert = (title: string, message = "") => {
    let thunkAction = noticeActions.showAlert([title, message]);
    dispatch(thunkAction);
  };

  const dispatchToast = (message = "") => {
    let thunkAction = noticeActions.showToast(message);
    dispatch(thunkAction);
  };

  return { visible, as, title, message, dispatchReset, dispatchAlert, dispatchToast };
}
