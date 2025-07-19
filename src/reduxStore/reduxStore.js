import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./rootReducer";
import { logger } from "redux-logger";

const middlewares = [logger];
const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};
const composedEnhancers = compose(applyMiddleware(...middlewares));
const enhancedReducer = persistReducer(persistConfig, rootReducer);
export const reduxStore = createStore(
  enhancedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(reduxStore);
