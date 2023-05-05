import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { useDispatch, useSelector } from "react-redux";
import reducer from "./slices";
import { serversApi } from "@/store/queries/ServerQueries";

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(serversApi.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

const setupStore = (context) => store;
const makeStore = (context) => setupStore(context);
export const wrapper = createWrapper(makeStore);
export default wrapper;

// custom hooks
export const useAppSelector = useSelector;
export const useAppDispatch = () => useDispatch();
