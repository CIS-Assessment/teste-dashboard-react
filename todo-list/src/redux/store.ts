import { createStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import todosReducer from "./reducers/todosReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["todo"],
};

const persistedReducer = persistReducer(persistConfig, todosReducer);
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default { store, persistor };
