import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Note = {
  date: number;
  content: string;
  joy: number;
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
    setCurrentWeek: (state) => {
      const currentdate = new Date();
      const oneJan = new Date(currentdate.getFullYear(), 0, 1);
      const numberOfDays = Math.floor((currentdate.getTime() - oneJan.getTime()) / (24 * 60 * 60 * 1000));
      const result = Math.ceil((currentdate.getDay() + 1 + numberOfDays) / 7);

      state.week = result;
    },
    setWeekNotes: (state, { payload }: PayloadAction<Note>) => {
      state.weeks[state.week].notes.push(payload);
    },
  },
});

export const getCurrentWeek = () => {
  return;
};

export const { setWeek, setWeeks, setWeekNotes, setCurrentWeek } = weeksSlice.actions;

export default weeksSlice.reducer;
