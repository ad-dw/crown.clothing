import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import { rootReducer } from "./rootReducer";
import { logger } from "redux-logger";

const middlewares = [logger];
const composedEnhancers = compose(applyMiddleware(...middlewares));
export const reduxStore = createStore(
  rootReducer,
  undefined,
  composedEnhancers
);
