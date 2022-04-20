import axios from 'axios';
import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';


export const setType = createAsyncThunk(
  'TYPE',
  ({}) => {
    return 
  }
);




const userReducer = createReducer(
  {},
  {
    [setType.fulfilled]: (state, action) => action.payload,
    
  }
);


export default userReducer;
