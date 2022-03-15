import { createSlice } from "@reduxjs/toolkit";


type cameraContext = {
    photo: string;
};

const initialState: cameraContext = {
    photo: "",
};

const cameraSlice = createSlice({
    name: "camera",
    initialState,
    reducers: {
        setPicture: (state, { payload }: { payload: string }) => {
            state.photo = payload;
        },
    },
});

export const { setPicture } = cameraSlice.actions;

export default cameraSlice.reducer;