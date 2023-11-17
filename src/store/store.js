import { configureStore } from "@reduxjs/toolkit";
import proveedorReducer from "../modules/proveedor/reducers/proveedorSlice";
import belieReducer from "./belieSlice";

export default configureStore({
  reducer: {
    proveedorReducer,
    belieReducer,
  },
});
