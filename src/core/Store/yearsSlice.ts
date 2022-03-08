import { createSlice } from "@reduxjs/toolkit";
import yearTableBuilder from "./yearTableBuilder/index.";

export type Note = {
  title: string;
  date: number;
};

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
  },
});

export const { setYear, setYears } = yearsSlice.actions;

export default yearsSlice.reducer;
