import { createSlice } from "@reduxjs/toolkit";

export type Page = "/" | "/years" | "/weeks" | "/today";

const pageTitle: { [x in Page]: string } = {
  "/": "Life calendar",
  "/today": "Rate the moment",
  "/weeks": "Your life in weeks",
  "/years": "Your life in years",
};

type appContext = {
  page: Page;
  title: string;
};

const initialState: appContext = {
  page: "/",
  title: pageTitle["/"],
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setPage: (state, { payload }: { payload: Page }) => {
      state.page = payload;
      state.title = pageTitle[payload];
    },
  },
});

export const { setPage } = appSlice.actions;

export default appSlice.reducer;
