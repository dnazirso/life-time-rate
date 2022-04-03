import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import appSlice from "./appSlice";
import weeksSlice from "./weeksSlice";
import yearsSlice from "./yearsSlice";
import cameraSlice from "./cameraSlice";
import imageUploadSlice from "./imageUploadSlice";

export const store = configureStore({
  reducer: {
    camera: cameraSlice,
    app: appSlice,
    years: yearsSlice,
    weeks: weeksSlice,
    img: imageUploadSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
