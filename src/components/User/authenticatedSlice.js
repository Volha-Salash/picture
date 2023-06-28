import { createSlice } from '@reduxjs/toolkit';

export const setAuthenticated = (authenticated) => {
    return {
      type: "SET_AUTHENTICATED",
      payload: authenticated,
    };
  };

const authenticatedSlice = createSlice({
  name: 'authenticated',
  initialState: false,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setAuthenticated, (state, action) => {
      return action.payload;
    });
  },
});

export default authenticatedSlice.reducer;
