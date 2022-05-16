import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import reducers from "./reducers";

// Configures the store for the reducer.
const Store = configureStore({
    reducer: reducers,
    middleware: [thunkMiddleware],
});

export default Store;
