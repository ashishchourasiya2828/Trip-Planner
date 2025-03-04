import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tripData: [],
};


export const tripSlice = createSlice({
  name: "trip",
  initialState,
  reducers: {
    setTripPlaces: (state, action) => {
        
        state.tripData.push(action.payload);
    //   state.tripData = action.payload;
    },
  },
});



export const { setTripPlaces } = tripSlice.actions;

export default tripSlice.reducer;
