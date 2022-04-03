import { createSlice } from "@reduxjs/toolkit";

type imgContext = {
  img: string;
};

const initialState: imgContext = {
  img: "",
};

const imgUploadSlice = createSlice({
  name: "imgFile",
  initialState,
  reducers: {
    setImg: (state, { payload }: { payload: string }) => {
      state.img = payload;
    },
  },
});

export const { setImg } = imgUploadSlice.actions;

export default imgUploadSlice.reducer;
