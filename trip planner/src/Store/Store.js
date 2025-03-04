import { configureStore } from '@reduxjs/toolkit';
import placeSlice  from './Reducers/PlaceSlice';
import  tripSlice  from './Reducers/TripSlice';

// import { setFamousData } from '../redux/placeSlice';

export const store = configureStore({
  reducer: {
    place: placeSlice, 
    trip:tripSlice,
  },
});

export default store;
