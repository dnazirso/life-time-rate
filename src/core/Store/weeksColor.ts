import { createSlice } from "@reduxjs/toolkit";
export type WeeksColor = {
  color: Array<number>[];
};
const initialState: WeeksColor = {
  color: [
    [255, 255, 255],
    [255, 0, 0],
    [0, 255, 0],
    [0, 0, 255],
  ],
};

const weeksColor = createSlice({
  name: "weeksColor",
  initialState: initialState,
  reducers: {
    setColorWeek: (state, { payload }: { payload: WeeksColor }) => {
      state = payload;
    },
  },
});

export const { setColorWeek } = weeksColor.actions;

export default weeksColor.reducer;
