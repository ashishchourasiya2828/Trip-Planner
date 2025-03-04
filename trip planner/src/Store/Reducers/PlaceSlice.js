import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  famousData: null,
};

export const placeSlice = createSlice({
  name: "place",
  initialState,
  reducers: {
    setFamousData: (state, action) => {

      // state.famousData.push(action.payload) 
      state.famousData= action.payload;

      // console.log(state.famousData);
      
    },
  },
});

export const { setFamousData } = placeSlice.actions;

export default placeSlice.reducer;
