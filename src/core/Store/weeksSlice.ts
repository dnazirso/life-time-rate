import { createSlice } from "@reduxjs/toolkit";

export type Note = {
  title: string;
  date: number;
};

export type Week = {
  id: number;
  joy: number;
  notes: Note[];
};

type ClientProductsContext = {
  weeks: Week[];
  week: number;
};

const initialState: ClientProductsContext = {
  weeks: [],
  week: 0,
};

const weeksSlice = createSlice({
  name: "weeks",
  initialState,
  reducers: {
    setWeek: (state, { payload }: { payload: number }) => {
      state.week = payload;
    },
    setWeeks: (state, { payload }: { payload: { birthdate: number } }) => {
      state.weeks = Array.from({ length: 90 * 52 }, (_, i) => i).map((age) => ({
        id: payload.birthdate + age * 7 * 24 * 60 * 60 * 1000,
        joy: 0.5,
        notes: [],
      }));
    },
  },
});

export const { setWeek, setWeeks } = weeksSlice.actions;

export default weeksSlice.reducer;
