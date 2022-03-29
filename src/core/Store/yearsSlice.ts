import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Note } from "./weeksSlice";
import yearTableBuilder from "./yearTableBuilder/index.";

export type Year = {
  age: number;
  date: number;
  joy: number;
  notes: Note[];
};

type ClientProductsContext = {
  years: Year[];
  year: number;
  birthdate: number;
};

const initialState: ClientProductsContext = {
  years: [],
  year: 0,
  birthdate: 0,
};

const yearsSlice = createSlice({
  name: "years",
  initialState,
  reducers: {
    setYear: (state, { payload }: { payload: number }) => {
      state.year = payload;
    },
    setYears: (state, { payload }: { payload: { birthdate: number } }) => {
      state.birthdate = payload.birthdate;
      state.years = yearTableBuilder(payload.birthdate);
    },
    setCurrentYear: (state) => {
      const currentdate = new Date();
      const age = currentdate.getFullYear() - new Date(state.birthdate).getFullYear();

      state.year = age;
    },
    setYearNote: (state, { payload }: PayloadAction<Note>) => {
      state.years[state.year].notes.push(payload);
    },
  },
});

export const { setYear, setYears, setCurrentYear, setYearNote } = yearsSlice.actions;

export default yearsSlice.reducer;
