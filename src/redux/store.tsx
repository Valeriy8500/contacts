import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { filterReducer } from "./filterReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import { logActionMiddleware } from "./logActionMiddleware";

const rootReducer = persistReducer(
  { key: 'redux', storage: storage },
  combineReducers({
    filter: filterReducer
  })
);

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logActionMiddleware))
);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;