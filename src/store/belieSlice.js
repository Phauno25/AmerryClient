import { createSlice, current } from "@reduxjs/toolkit";

export const belieSlice = createSlice({
  name: "belie",
  initialState: {
    modal: { isOpen: false, display: "" },
  },
  reducers: {
    setModal: (state, actions) => {
      state.modal = actions.payload;
    },
  },
});

export const { setModal } = belieSlice.actions;

export default belieSlice.reducer;
