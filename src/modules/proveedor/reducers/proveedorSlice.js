import { createSlice, current } from "@reduxjs/toolkit";

export const proveedorSlice = createSlice({
  name: "proveedor",
  initialState: {
    proveedorSelected: {},
    allProveedores: [],
    isModalActive: false,
  },
  reducers: {
    setProveedores: (state, actions) => {
      state.allProveedores = actions.payload;
    },
    updateProveedores: (state, actions) => {
      const index = state.allProveedores.findIndex(
        (e) => e._id == actions.payload._id
      );
      if (index != -1) {
        state.allProveedores[index] = actions.payload;
      } else {
        const updatedAllProveedores = [
          ...state.allProveedores,
          actions.payload,
        ];
        state.allProveedores = updatedAllProveedores;
      }
    },
    setProveedorSelected: (state, actions) => {
      state.proveedorSelected = actions.payload;
    },
    setModalActive: (state, actions) => {
      state.isModalActive = actions.payload;
    },
  },
});

export const {
  setProveedores,
  setProveedorSelected,
  setModalActive,
  updateProveedores,
} = proveedorSlice.actions;

export default proveedorSlice.reducer;
