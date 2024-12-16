import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      state = Object.assign(state, action.payload); //merge the payload as well as the state
    },
  },
});

export default searchSlice.reducer;
export const { cacheResults } = searchSlice.actions;
