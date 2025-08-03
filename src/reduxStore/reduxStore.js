// import {
//   applyMiddleware,
//   compose,
//   legacy_createStore as createStore,
// } from "redux";

// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import { rootReducer } from "./rootReducer";
import { logger } from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";

const middlewares = [logger];

export const reduxStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(process.env.NODE_ENV !== "production" ? middlewares : []),
});
